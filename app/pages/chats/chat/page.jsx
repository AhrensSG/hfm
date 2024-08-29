"use client";
import MessageContainer from "@/app/components/chats/chat/MessageContainer";
import MessageInput from "@/app/components/chats/chat/MessageInput";
import NavBar from "@/app/components/nav_bar/NavBar";
import { socket } from "@/app/socket";
import { useState, useEffect } from "react";

export default function ChatPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTrasnport] = useState("N/A");
  const [receivedMessage, setReceivedMessage] = useState(""); // Estado para almacenar el mensaje recibido
  const [message, setMessage] = useState(""); // Estado para almacenar el mensaje enviado

  useEffect(() => {
    const onMessage = (message) => {
      console.log("Mensaje recibido en el cliente:", message);
      setReceivedMessage(message); // Actualiza el estado con el mensaje recibido
    };

    const onConnect = () => {
      console.log("Conectado al servidor");
      setIsConnected(true);
      setTrasnport(socket.io.engine.transport.name);

      // Mueve la configuración del evento `message` aquí para asegurarte de que se registra después de la conexión
      socket.on("message", onMessage);

      socket.io.engine.on("upgrade", (transport) => {
        console.log("Transport upgraded to:", transport.name);
        setTrasnport(transport.name);
      });
    };

    const onDisconnect = () => {
      console.log("Desconectado del servidor");
      setIsConnected(false);
      setTrasnport("N/A");
    };

    // Maneja la situación donde el socket ya está conectado
    if (socket.connected) {
      console.log("Socket ya está conectado");
      onConnect();
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      // Limpieza de eventos
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit("message", message);
    setMessage(message);
    console.log("Enviado:", message);
  };

  const receiveMessage = (message) => {
    setReceivedMessage(message);
  };
  return (
    <div>
      <header className="px-2">
        <NavBar />
      </header>
      <main className="flex flex-col justify-center items-center m-2">
        <MessageContainer />
        <MessageInput action={sendMessage} />
      </main>
    </div>
  );
}

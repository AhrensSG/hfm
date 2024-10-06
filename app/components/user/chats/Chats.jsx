"use client";
import { Context } from "@/app/context/GlobalContext";
import ChatsCard from "./ChatsCard";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Chat() {
  const { state } = useContext(Context);
  const [user, setUser] = useState(state?.user);
  const [chats, setChats] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      setUser(state?.user);
    }
  }, [state]);

  useEffect(() => {
    const fetchChats = async () => {
      console.log("Fetching chats...");

      try {
        const { data } = await axios.get("/api/chat?userId=" + user?.id);
        setChats(data.chats);
      } catch (error) {
        console.log(error);
      }
    };

    // Llamar a fetchChats si el usuario está disponible y los chats aún no se han cargado
    if (user && !chats) {
      fetchChats();
    }
  }, [user, chats]); // Dependencias: se ejecutará cuando cambien `user` o `chats`

  if (!user || !chats) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  // Determina el estado del chat de tipo SUPPORT
  const supportChat = chats.find((chat) => chat.type === "SUPPORT");
  const privateChats = chats.filter((chat) => chat.type === "PRIVATE");
  const groupChats = chats.filter((chat) => chat.type === "GROUP");

  // Obtener el último mensaje del chat SUPPORT
  const lastMessage = supportChat?.messages[supportChat.messages.length - 1];

  return (
    <div>
      {console.log(chats)}
      {/* Renderizar la tarjeta basada en el estado del chat SUPPORT */}
      {privateChats &&
        privateChats.map((chat) => {
          // Encuentra el participante que sea de tipo "OWNER" y no sea el usuario actual
          const ownerParticipant = chat.participants.find(
            (u) => u.participantType === "OWNER" && u.participantId !== user.id
          );

          return (
            <ChatsCard
              key={chat.id}
              name={
                ownerParticipant
                  ? ownerParticipant.owner?.name +
                    " " +
                    ownerParticipant.owner?.lastName
                  : "Unknown"
              }
              image={
                ownerParticipant?.owner?.profilePicture ||
                "/profile/profile.jpg"
              }
              lastMessage={chat.messages[chat.messages.length - 1]}
              action={() =>
                router.push(
                  `/pages/user/chats/chat?type=priv&chat=${chat.id}&userId=${user.id}`
                )
              }
            />
          );
        })}
      {!supportChat && (
        <ChatsCard name={"Soporte"} image={"/chat/soporte.svg"} id={user.id} />
      )}
      {supportChat && !supportChat.isActive && (
        <ChatsCard
          name={"Soporte"}
          image={"/chat/soporte.svg"}
          lastMessage={lastMessage}
          action={() =>
            router.push(
              `/pages/user/chats/chat?type=supp&chat=${supportChat.id}&bool=true&userId=${user.id}`
            )
          }
        />
      )}
      {supportChat && supportChat.isActive && (
        <ChatsCard
          name={"Soporte"}
          image={"/chat/soporte.svg"}
          lastMessage={lastMessage}
          action={() =>
            router.push(
              `/pages/user/chats/chat?type=supp&chat=${supportChat.id}&userId=${user.id}`
            )
          }
        />
      )}
    </div>
  );
}

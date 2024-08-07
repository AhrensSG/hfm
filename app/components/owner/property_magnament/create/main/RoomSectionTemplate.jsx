import EditButton from "../../shared/EditButton";
import RoomInfoTemplate from "./room_section/RoomInfoTemplate";
import RoomEditModal from "./room_section/RoomEditModal";
import { useState } from "react";

export default function RoomSectionTemplate({ data, setData, action }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleEditRoom = (room) => {
    setSelectedRoom(room);
    handleShowModal(); // Abre el modal para editar la habitación
  };

  const handleAddRoom = () => {
    setSelectedRoom(null); // Resetea la habitación seleccionada
    action(); // Abre el modal para añadir una nueva habitación
  };

  return (
    <section className="flex flex-col gap-3 items-center w-full">
      <article className="w-full flex justify-between items-center">
        <h2 className="font-bold text-[1.37rem] w-full text-start">
          Habitaciones
        </h2>
        <EditButton action={handleAddRoom} />{" "}
        {/* Cambia el action para manejar añadir habitación */}
      </article>
      <article className="flex justify-evenly gap-1 w-full">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <RoomInfoTemplate
              key={index}
              img={item?.image || "/property-details/stock-1.svg"}
              name={item.name}
              bedNumber={item.numberBeds}
              showModal={() => handleEditRoom(item)} // Pasa la habitación a editar al modal
            />
          ))
        ) : (
          <>
            <RoomInfoTemplate showModal={handleShowModal} type={"empty"} />
            <RoomInfoTemplate showModal={handleShowModal} type={"empty"} />
          </>
        )}
      </article>
      {showModal && (
        <RoomEditModal
          data={data}
          setData={setData}
          showModal={handleShowModal}
          selectedRoom={selectedRoom} // Pasa la habitación seleccionada al modal
        />
      )}
    </section>
  );
}

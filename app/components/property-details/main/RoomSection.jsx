import { useState } from "react";
import RoomInfo from "./room_section/RoomInfo";
import ModalRomInfo from "./room_section/ModalRomInfo";

export default function RoomSection({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [roomInfo, setRoomInfo] = useState(null);

  const handleModal = (data) => {
    setRoomInfo(data);
    setShowModal(!showModal);
  };
  return (
    <>
      <section className="flex flex-col gap-3 items-center w-full">
        <h2 className="font-bold text-[1.37rem] w-full text-start">
          Habitaciones
        </h2>
        <div className="flex justify-evenly gap-1 w-full overflow-x-auto">
          {data.map((item, index) => (
            <RoomInfo key={item.id} data={item} action={handleModal} />
          ))}
        </div>
      </section>

      {showModal && <ModalRomInfo data={roomInfo} action={handleModal} />}
    </>
  );
}

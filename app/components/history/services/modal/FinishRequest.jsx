import { motion } from "framer-motion";
export default function FinishRequest({ next, prev, data }) {
  return (
    <motion.div
      className="h-full py-6 flex flex-col justify-center items-center gap-2 mx-6 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center w-full">
        <h2 className="font-medium text-[#161616] text-lg ">
          {data.day.dayNumber} Jul, {data.day.dayName}
        </h2>
        <p className="font-medium text-[#161616] text-sm">{data.time} PM</p>
      </div>
      <ul className="list-disc text-[#757575] text-sm font-normal self-start pl-5">
        <li>
          {data.type === "cleaning"
            ? "Servicio de limpieza"
            : "Servicio de reparacion"}
        </li>
      </ul>
      <div className="flex justify-between items-center gap-3 w-full mt-auto">
        <button
          onClick={next}
          type="button"
          className="text-sm font-normal bg-[#0C1660] w-[9.75rem] h-12 text-white flex justify-center items-center rounded-xl"
        >
          Aceptar
        </button>
        <button
          onClick={prev}
          type="button"
          className="text-sm font-normal bg-white border border-[#0C1660] w-[9.75rem] h-12 text-[#0C1660] flex justify-center items-center rounded-xl"
        >
          Cancelar
        </button>
      </div>
    </motion.div>
  );
}

import { plus_jakarta } from "@/font";
import SupplieAdminCard from "./SupplieAdminCard";
import RequestPayment from "./reques_payment/RequestPayment";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PreviewPayment from "./reques_payment/PreviewPayment";
import FinishModal from "./reques_payment/FinishModal";
import axios from "axios";
import { toast } from "sonner";

export default function SuppliesPanel({ propertyId }) {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [continueModal, setContinueModal] = useState(0);
  const [dataSupply, setDataSupply] = useState(null);
  const [suppliesList, setSuppliesList] = useState(null);

  const handleShowRequestModal = () => {
    setShowRequestModal(!showRequestModal);
  };

  const handleCloseModal = () => {
    setShowRequestModal(false);
    setContinueModal(0);
  };

  const formatedDae = (date) => {
    return date.split("/").reverse().join("-");
  };
  const createSupply = async (data) => {
    const supply = {
      title: data.title,
      amount: data.amount,
      expirationDate: formatedDae(data.date),
      reference: data.reference || " - ",
      discount: data.discount,
      typeSupply: data.typeSupply,
      propertyId: propertyId,
    };
    try {
      const response = await axios.post("/api/admin/supply", supply);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/admin/supply?propertyId=" + propertyId
        );
        console.log(response.data);

        setSuppliesList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (data) => {
    try {
      const response = await createSupply(data);
      if (response instanceof Error) {
        throw response;
      } else {
        toast.success("Factura generada correctamente");
        setContinueModal(continueModal + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!suppliesList) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <main
        className={`${plus_jakarta.className} relative flex flex-col justify-center items-center p-2`}
      >
        <div onClick={handleShowRequestModal} className="flex justify-end p-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Generar factura
          </button>
        </div>
        <section className="flex flex-col p-2 gap-3">
          {suppliesList.length > 0 ? (
            suppliesList.map((supply) => {
              return (
                <SupplieAdminCard
                  data={supply}
                  action={handleShowRequestModal}
                />
              );
            })
          ) : (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-600 text-lg font-semibold">
                No hay facturas disponibles
              </p>
            </div>
          )}
        </section>
        {showRequestModal && continueModal === 0 ? (
          <RequestPayment
            next={(data) => {
              toast.promise(handleSubmit(data), {
                loading: "Cargando...",
                success: () => {
                  setContinueModal(continueModal + 1);
                  return "Factura generada correctamente";
                },
                error: "Error al generar la factura",
              });
            }}
            back={() => {
              handleCloseModal();
            }}
          />
        ) : showRequestModal && continueModal === 1 ? (
          <FinishModal action={handleCloseModal} />
        ) : null}
      </main>
    </AnimatePresence>
  );
}

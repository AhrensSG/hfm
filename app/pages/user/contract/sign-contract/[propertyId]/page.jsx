"use client";
import NavBar from "@/app/components/nav_bar/NavBar";
import GlobalContext from "@/app/context/GlobalContext";
import { plus_jakarta } from "@/font";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, Suspense } from "react";
import ContractDetail from "@/app/components/user/contract/contract_detail/ContractDetail";
import { Toaster } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import ThankYou from "@/app/components/user/thank_you/ThankYou";
import axios from "axios";

export default function Contract({ params }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [owner, setOwner] = useState();
  const [property, setProperty] = useState();
  const [room, setRoom] = useState(false); // Estado para la room
  const propertyId = params.propertyId;
  const router = useRouter();
  const searchParams = useSearchParams(); // Para obtener los query params

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (!(currentStep - 1)) {
      return;
    }
    setCurrentStep(currentStep - 1);
  };

  const handleRedirect = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ownerData = await axios.get(`/api/user?propertyId=${propertyId}`);
        const propertyData = await axios.get(`/api/property?id=${propertyId}`);

        setOwner(ownerData.data || null);
        setProperty(propertyData?.data?.property || null);

        const roomId = searchParams.get("r");
        const leaseOrderId = searchParams.get("lo");

        if (propertyData?.data?.property && roomId) {
          const rooms = propertyData.data.property.rooms || [];

          const foundRoom = rooms.find((room) => room.id === parseInt(roomId));
          setRoom(foundRoom || null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [propertyId, searchParams]);

  if (!owner || !property) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <GlobalContext>
      <div>
        <Toaster richColors={true} duration={3000} />
        <header>
          <NavBar />
        </header>
        <main className={`${plus_jakarta.className} p-2 text-[#000000]`}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
            }
          >
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <ContractDetail
                  owner={owner}
                  property={property}
                  room={room}
                  handleContinue={handleContinue}
                  handleBack={handleBack}
                />
              )}
              {currentStep === 2 && (
                <ThankYou
                  title={"¡Felicidades!"}
                  subTitle={"Hemos recibido la información de manera exitosa."}
                  body={
                    "Te notificaremos cuando validemos la información enviada."
                  }
                  action={"Regresar "}
                  callback={handleRedirect}
                />
              )}
            </AnimatePresence>
          </Suspense>
        </main>
      </div>
    </GlobalContext>
  );
}

"use client";

import CategorySelectSection from "@/app/components/owner/property_magnament/create/CategorySelectSection";
import UpdateProperty from "@/app/components/owner/property_magnament/update/UpdateProperty";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

export default function UpdatePropertyPage({ params }) {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState(false);

  const id = params.id;

  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/property?id=${id}`);
        setInitialData(response.data.property);
        setCurrentCategory(response.data.property.category);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const updateInitialData = () => {
      setInitialData((current) => {
        return {
          ...current,
          category: currentCategory,
        };
      });
    };
    updateInitialData();
  }, [currentCategory]);

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep - 1 === 0) {
      return router.push("/pages/owner");
    }
    setCurrentStep(currentStep - 1);
  };

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (!initialData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <CategorySelectSection
            handleContinue={handleContinue}
            handleBack={handleBack}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
          />
        )}
        {currentStep === 2 && (
          <UpdateProperty data={initialData} handleBack={handleBack} />
        )}
      </AnimatePresence>
    </Suspense>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import Auth from "@/app/components/public/auth/Auth";
import Dropdown from "@/app/components/public/auth/Dropdown";
import Image from "next/image";
import { Suspense } from "react";

function AuthFallback() {
  return <div>Loading...</div>; // O cualquier otro fallback visual
}

export default function AuthPage() {
  const searchParams = useSearchParams(); // Captura los parámetros de la URL
  const redirect = searchParams.get("redirect"); // Obtén el valor del parámetro `redirect`

  return (
    <div className="flex flex-col h-screen">
      <header>
        <nav className="flex justify-between items-center px-5">
          <button>
            <Image
              src="/icon-left-arrow.svg"
              width={48}
              height={48}
              alt="Boton para volver"
            ></Image>
          </button>
          <Dropdown />
        </nav>
      </header>
      <main className="flex justify-center items-center grow">
        <Suspense fallback={<AuthFallback />}>
          <Auth redirect={redirect} /> {/* Pasa `redirect` como prop */}
        </Suspense>
      </main>
    </div>
  );
}

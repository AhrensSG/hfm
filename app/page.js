"use client";
import { useContext, useEffect, useState } from "react";
import FeaturedSection from "./components/user/home/FeaturedSection";
import Hero from "./components/user/home/Hero";
import PromotionSection from "./components/user/home/PromotionSection";
import NavBar from "./components/nav_bar/NavBar";
import SearchBar from "./components/user/search_bar/SearchBar";
import { Context } from "./context/GlobalContext";
import { toast } from "sonner";
import { getAllProperties } from "./context/actions";
export default function Home() {
  const { state, dispatch } = useContext(Context);
  const [properties, setProperties] = useState([]);
  const [propertiesInOffer, setPropertiesInOffer] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [roomsInOffer, setRoomsInOffer] = useState([]);

  const filterOffer = (properties) => {
    return properties.filter((property) => property.offer !== null && property.offer < 0 && property.status === "FREE");
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        await getAllProperties(dispatch);
      } catch (error) {
        toast.error("Error al obtener propiedades");
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    // Solo actualiza si hay un cambio en state.properties
    if (state.properties && state.properties !== properties) {
      setProperties(state.properties.filter((prop) => prop.status === "FREE"));
      setPropertiesInOffer(filterOffer(state.properties));
    }
    if (properties.length > 0) {
      let aux = properties
        .filter((prop) => prop.category === "HELLO_ROOM" || prop.category === "HELLO_COLIVING")
        .flatMap((prop) => prop.rooms.filter((room) => room.status === "FREE").map((item) => ({
          ...item,
          type: "room",
        })));
      setRooms(aux);
    }
    if (propertiesInOffer.length > 0) {
      let aux = propertiesInOffer
        .filter((prop) => prop.category === "HELLO_ROOM" || prop.category === "HELLO_COLIVING")
        .flatMap((prop) => prop.rooms.filter((room) => room.status === "FREE").map((item) => ({
          ...item,
          type: "room",
        })))
    }
  }, [state.properties, dispatch]);

  return (
    <div>
      <header className="px-2">
        <NavBar />
      </header>
      <main>
        <Hero />
        <div className="w-full pt-4">
          <SearchBar showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
        <FeaturedSection data={[...properties, ...rooms]} />
        <PromotionSection data={[...propertiesInOffer, ...roomsInOffer]} />
      </main>
    </div>
  );
}

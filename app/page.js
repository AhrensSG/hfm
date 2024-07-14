import FeaturedRooms from "./components/home/FeaturedRooms";
import Hero from "./components/home/Hero";
import NavBar from "./components/nav_bar/NavBar";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <FeaturedRooms />
      </main>
    </div>
  );
  // return <main className=""><h1>Hello, World!</h1></main>;
}

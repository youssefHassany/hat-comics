import ComicsList from "./ComicsList";
import Hero from "./Hero";
import "./style.css";

const Home = () => {
  return (
    <section className="bg-zinc-900 min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <ComicsList />
    </section>
  );
};

export default Home;

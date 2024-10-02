import Carousel from "../components/Home/Carousel";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import Stats from "../components/Home/Stats";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Carousel />
      <Stats />
    </main>
  );
};

export default Home;

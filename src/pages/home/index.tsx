import { Header } from "../../components/header";
import { Carousel } from "./components/carousel";
import { Curiosidades } from "./components/curiosidades";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <Carousel />
      <Curiosidades />
    </HomeContainer>
  );
};

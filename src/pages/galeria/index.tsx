import { Header } from "../../components/header";
import { GaleriaContainer } from "./styles";
import { CharacterCards } from "./components/characterCards";

export const Galeria = () => {
  return (
    <GaleriaContainer>
      <Header />
      <CharacterCards />
    </GaleriaContainer>
  );
};

import { Header } from "../../components/header";
import { Pessoas } from "./components/pages/pessoas";
import { GaleriaContainer } from "./styles";


export const Galeria = () => {
  return (
    <GaleriaContainer>
      <Header />
      <Pessoas />
    </GaleriaContainer>
  );
};

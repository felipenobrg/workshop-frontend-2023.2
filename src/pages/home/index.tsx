import { Header } from "../../components/header"
import { Carousel } from "./components/carousel"
import { Curiosidades } from "./components/curiosidades"

export const Home = () => {
    return (
        <>
        <Header />
        <Carousel />
        <Curiosidades />
        </>
    )
}
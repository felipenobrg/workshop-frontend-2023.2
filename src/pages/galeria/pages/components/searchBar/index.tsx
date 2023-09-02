import { NavLink } from "react-router-dom"
import { SearchBarContainer } from "./styles"

export const SearchBar = () => {
    return (
        <SearchBarContainer>
        <NavLink to={'/galeria/pessoas'}>Pessoas</NavLink>
        <NavLink to={'/galeria/planetas'}>Planetas</NavLink>
        <NavLink to={'/galeria/especies'}>Espécies</NavLink>
       </SearchBarContainer>
    )
}
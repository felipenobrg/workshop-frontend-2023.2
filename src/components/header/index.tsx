import { Link } from 'react-router-dom'
import starWarsLogo from '../../assets/starWarsLogo.png'
import { HeaderContainer, LinkContainer } from './styles'

export const Header= () => {
    return (
     <HeaderContainer>
      <img src={starWarsLogo}  />
      <LinkContainer>
      <Link to={'/'}>Início</Link>
      <Link to={'galeria'}>Galeria</Link>
      </LinkContainer>
     </HeaderContainer>
    )
}
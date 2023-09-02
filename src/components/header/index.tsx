import { Link } from 'react-router-dom';
import starWarsLogo from '../../assets/starWarsLogo.png';
import { HeaderContainer, LinkContainer } from './styles';

export const Header = () => {
  return (
    <HeaderContainer id="header">
      <img src={starWarsLogo} alt="Star Wars Logo" />
      <LinkContainer>
        <Link to={'/'}>Início</Link>
        <Link to={'/galeria'}>Galeria</Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

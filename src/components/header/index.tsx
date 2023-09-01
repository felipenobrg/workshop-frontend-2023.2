import { Link } from 'react-router-dom';
import starWarsLogo from '../../assets/starWarsLogo.png';
import { HeaderContainer, LinkContainer } from './styles';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer id="header" variant={isScrolled ? 'black' : 'transparent'}>
      <img src={starWarsLogo} alt="Star Wars Logo" />
      <LinkContainer>
        <Link to={'/'}>Início</Link>
        <Link to={'galeria'}>Galeria</Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

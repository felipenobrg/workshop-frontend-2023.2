import { styled } from "styled-components";

interface BackgroundProps {
  variant: 'black' | 'transparent'
}

export const HeaderContainer = styled.header<BackgroundProps>`
  width: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;
  position: fixed;
  top: 0px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.variant === 'black' ? props.theme["black"] : 'transparent'};

  img {
    width: 15%;
    background-image: none;
  }

`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-image: none;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-300"]};
    font-size: 1.1rem;
    text-transform: uppercase;
    background-image: none;

    &:hover {
      transition: 0.3s ease;
      color: ${(props) => props.theme["white"]};
    }
  }
`;

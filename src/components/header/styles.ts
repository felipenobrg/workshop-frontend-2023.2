import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: fixed;
  top: 0px;


  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: top 0.3s ease, background-color 0.3s ease;

  background: ${(props => props.theme["black"])};
  background-size: cover;

  img {
    width: 13%;
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

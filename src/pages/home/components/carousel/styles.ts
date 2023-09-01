import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  z-index: 0;
  overflow: hidden;
  margin-top: 2rem;
  position: relative;

  img {
    width: 100%;
    max-width: 100%;
    height: 80vh;
    z-index: 0;
  }

  @media (max-width: 768px) {
    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100%;
      height: 27rem;
      z-index: 0;
    }
  }
`;

export const KnowMoreContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;

  h1 {
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const KnowMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  cursor: pointer;
  a {
    padding: 0.8rem;
    border-radius: 9px;
    width: 10rem;
    font-weight: 700;
    background: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["gray-900"]};
    text-decoration: none;
  }
`;

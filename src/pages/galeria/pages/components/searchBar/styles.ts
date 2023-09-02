import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 1.5rem;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    position: relative;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--white);
      transform: scaleX(0);
      transition: transform 0.3s ease;
      transform-origin: bottom right;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

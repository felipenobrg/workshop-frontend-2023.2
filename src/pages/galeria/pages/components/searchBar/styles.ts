import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color:  ${(props => props.theme["gray-800"])};
  padding: 1.5rem;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: ${(props => props.theme.white)};
    font-weight: bold;
  }
`
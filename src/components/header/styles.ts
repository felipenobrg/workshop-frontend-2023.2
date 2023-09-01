import { styled } from "styled-components";

export const HeaderContainer = styled.header`
   width: 100%;
   max-width: 1120px;
   margin: 0 auto;
   padding: 0 1.5rem;
 
   display: flex;
   align-items: center;
   justify-content: space-between;

   img {
    width: 15%;
    background-image: none;
   }
`

export const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  background-image: none;

  a {
    text-decoration: none;
    color: ${(props => props.theme["gray-300"])};
    font-size: 1.1rem;
    text-transform: uppercase;
    background-image: none;

    &:hover {
        transition: 0.3s ease;
        color: ${(props => props.theme["white"])};
    }
  }
`
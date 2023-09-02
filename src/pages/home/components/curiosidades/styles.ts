import { styled } from "styled-components";


export const CuriosidadesContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 4rem;

  h1 {
    text-transform: uppercase;
    color: ${(props => props.theme.white)};
  }

  img {
    width: 80%;
  }

  .curiosidade {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      width: 80%;
      margin-bottom: 2rem;
    }

    h2 {
      margin: 2rem 0 2rem 0;
    }
  }
`;

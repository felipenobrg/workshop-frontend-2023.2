import { keyframes, styled } from "styled-components";

export const GaleryContainer = styled.div`
  display: flex;
  flex-direction: column;

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin: 3rem 0 2rem 3rem;
  }

  .cards-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    gap: 1rem;
    border: 1px solid ${(props) => props.theme["gray-500"]};
    padding: 1rem;
    width: 80%;
    border-radius: 6px;
  }

  @media screen and (max-width: 768px) {
    .cards-container {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  input {
    padding: 0.4rem;
    border-radius: 8px;
    border: 0;
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

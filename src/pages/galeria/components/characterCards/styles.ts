import { keyframes, styled } from "styled-components";

export const GaleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 8.7rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    border-radius: 8px;
    margin: 1rem;
    padding: 2rem;
    border: 1px solid ${(props => props.theme["gray-700"])};
  }
`

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
  background-color: rgba(255, 255, 255, 0.7); 
  overflow: hidden;
`;
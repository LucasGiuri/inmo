import styled from "styled-components";

export const Spinner = styled.div`
  border: 4px solid black;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: transparent;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate (360deg);
    }
  }
`;

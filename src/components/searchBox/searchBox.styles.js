import styled, { css, keyframes } from "styled-components";
import { FaSearchLocation } from "react-icons/fa";

const fadeIn = keyframes`
 from {
     opacity: 0;
 }

 to {
     opacity: 1;
 }
`;

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 4px solid #a60321;
  background: #121212;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.74);
      border: 4px solid #a60321;
      background: #121212;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 2rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

export const IconMagnifyingGlass = styled(FaSearchLocation)`
  height: 1.25rem;
  width: 1.25rem;
  fill: #a60321;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

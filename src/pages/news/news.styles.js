import styled, { keyframes } from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const NovedadesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IndexContainer = styled.div`
  margin: 5px;
  background-color: #a60321;
  height: 100%;
  width: 25%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: black;
  }
  h4 {
    color: green;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  margin: 5px;
  padding: 15px;
  background-color: #272727;
  border-radius: 12px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:hover {
    transition: 0.8s;
    background-color: #1c1c1c;
  }

  h3 {
    padding: 15px;
    font-size: 25px;
  }

  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  margin: 5px;
  border-radius: 12px;
  background: #1c1c1c;
  color: #a60321;
  width: 100%;
  height: auto;
  display: ${(p) => (p.isShown ? 'flex' : 'none')};
  flex-direction: column;
  animation: ${(p) => (p.isShown ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;

  p {
    padding: 15px;
    font-size: 15px;
    display: flex;
    justify-content: center;
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: #a60321;
  font-size: 20px;
`;

export const MinusIcon = styled(FiMinus)`
  color: #a60321;
  font-size: 20px;
`;

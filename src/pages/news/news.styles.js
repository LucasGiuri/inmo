import styled, { keyframes } from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";

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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IndexContainer = styled.div`
  color: #fff;
  font-weight: bold;
  margin: 5px;
  margin-right: 15px;
  background-color: #da050d;
  height: 100%;
  width: 25%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  h3 {
    color: #fff;
    font-weight: bold;
  }
  h4 {
    color: #fff;
    font-weight: bold;
    transition: 0.8s;

    &:hover {
      color: black;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Wrap = styled.div`
  margin: 5px;
  padding: 15px;
  background-color: #3c4044;
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

  @media screen and (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0px;
  }
`;

export const Dropdown = styled.div`
  margin: 5px;
  border-radius: 12px;
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  height: auto;
  display: ${(p) => (p.isShown ? "flex" : "none")};
  flex-direction: column;
  animation: ${(p) => (p.isShown ? fadeIn : fadeOut)} 0.5s linear;
  transition: visibility 0.5s linear;

  p {
    padding: 15px;
    font-size: 15px;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    margin-top: 5px;
    margin-left: 0px;
  }
`;

export const PlusIcon = styled(FiPlus)`
  color: #da050d;
  font-size: 20px;
`;

export const MinusIcon = styled(FiMinus)`
  color: #da050d;
  font-size: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

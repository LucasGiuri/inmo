import styled from "styled-components";

import appraisalsbg from "../../assets/appraisalsbg.jpg";

export const Container = styled.div`
  margin-top: 80px;
  padding-top: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${appraisalsbg});
    z-index: -1;
    filter: blur(10px);
  }
`;

export const ContactBox = styled.div`
  max-width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 45px;
  border-radius: 4px;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

export const LeftArea = styled.div`
  color: #fff;
  font-weight: bold;
  margin: 40px;
  height: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const RightArea = styled.div`
  padding: 25px 40px;
  background-color: #fff;
  border-radius: 12px;

  h2 {
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      height: 4px;
      width: 50px;
      border-radius: 2px;
      background-color: #a60321;
    }
  }
`;

export const InputTextField = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(230, 230, 230, 0.6);
  font-size: 1.1 rem;
  margin-bottom: 22px;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: #fff;
    border: 1.5px solid #da050d;
  }
`;

export const TextArea = styled.textarea`
  min-height: 150px;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(230, 230, 230, 0.6);
  width: 100%;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    background-color: #fff;
    border: 1.5px solid #da050d;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  background-color: #a60321;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: #732727;
  }
`;

export const ContactInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a60321;
  border-radius: 12px;
`;

import styled from "styled-components";

export const ContactXsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
  flex-wrap: nowrap;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  position: relative;
  border-radius: 30px;
  overflow: hidden;

  @media (max-width: 900px) {
    margin-top: 20px;  
    width: 75%;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: auto;
  width: auto;
  padding: 10px;
  color: #fff;
`;

export const InputTextField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  background: transparent;
  outline: none;
  color: #fff;
`;

export const Submit = styled.button`
  margin-top: 5px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #a60321;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    background-color: #a61921;
    transform: scale(1.155);
    font-weight: bold;
  }

`;

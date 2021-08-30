import styled from "styled-components";

export const ContactMiniContainer = styled.div`
  background-color: #121212;
  position: absolute;
  right: 40px;
  width: 250px;
  padding: 25px;

  h2 {
      color: #fff;
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

export const TextArea = styled.textarea`  

  min-height: 100px;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  background-color: rgba(230, 230, 230, 0.6);
  width: 100%;
  transition: 0.3s;
`;

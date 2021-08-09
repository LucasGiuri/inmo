import styled from "styled-components";
import Button from "@material-ui/core/Button";
import background from "../../assets/background.jpg";

export const AppraisalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppraisalsInfoContainer = styled.div`
  background-color: #734429;
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const UiButton = styled(Button)`
  background-color: #040404;
  color: #fff;
  border-radius: 8px;
  transition: 0.8s;

  &:hover {
    background-color: #DA050D;
  }
`;

export const ChildContainer = styled.div`
  margin: 5px;
  color: black;
  font-weight: bold;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

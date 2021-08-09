import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const AppraisalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const Container = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AppraisalsInfoContainer = styled.div`
  color: #fff;
  height: 600px;
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

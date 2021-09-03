import styled from "styled-components";
import background from "../../assets/background.jpg";
import Button from '@material-ui/core/Button';

export const AppraisalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
`;

export const Container = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: darkgrey;
`;

export const AppraisalsInfoContainer = styled.div`
  background-color: #806f65;
  color: #fff;
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const UiButton = styled(Button)`
  text-decoration: none;
  cursor: pointer;
  background-color: #121212;;
  color: #fff;
  border-radius: 4px;
  transition: 0.8s;
  padding: 10px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    background-color: #a60321;
    transform: scale(1.055);
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

export const InternalLink = styled.a`
  text-decoration: none;
`;

export const BtnLink = styled.a`
  text-decoration: none;
`
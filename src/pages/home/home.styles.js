import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const Container = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: darkgrey;
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

export const InternalLink = styled.a`
  text-decoration: none;
`;

export const BtnLink = styled.a`
  text-decoration: none;
`
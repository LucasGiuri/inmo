import styled from "styled-components";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

export const HomeContainer = styled.div`
  width: 100%;
`

export const Container = styled.div`
  padding: 50px;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const UiButton = styled(Button)`
  text-decoration: none;
  cursor: pointer;
  background-color: #121212;
  color: #fff;
  border-radius: 4px;
  transition: 0.8s;
  padding: 10px;
  font-weight: bold;
  transition: 0.5s;
  display: flex;
  width: auto;

  &:hover {
    background-color: #a60321;
    transform: scale(1.255);
  }
`;

export const InternalLink = styled.a`
  text-decoration: none;
`;

export const BtnLink = styled.a`
  text-decoration: none;
`

export const HomeTypography = styled(Typography)`
  color: #fff;
  padding: 50px;
  font-weight: bold;
`

export const HighlightProperties = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  padding: 25px;
  width: 100%;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`

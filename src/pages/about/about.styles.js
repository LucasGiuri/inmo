import styled from "styled-components";
import { Typography } from "@material-ui/core";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: darkgray;
  padding: 40px;
  background: black;

  @media (max-width: 850px) {
    height: 100%;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media (max-width: 350px) {
    flex-direction: column;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  @media (max-width: 850px) {
    padding: 5px;
    margin: 0;
  }
`;

export const AboutTypography = styled(Typography)`
  color: #fff;
  font-weight: bold;
`

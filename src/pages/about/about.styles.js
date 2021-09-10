import styled from "styled-components";
import { Typography } from "@material-ui/core";


export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: darkgray;

  @media (max-width: 850px) {
    height: 100%;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutTypography = styled(Typography)`
  color: #fff;
  font-weight: bold;
`

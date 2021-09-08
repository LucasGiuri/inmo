import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: auto;
  cursor: pointer;
  padding-bottom: 10px;
  border-radius: 12px;
  overflow: hidden;


  transition: 0.5s;

  &:hover {
    background-color: #d8d4cf;
    transform: scale(1.025);
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 300px;

  @media (max-width: 450px) {
    height: auto;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  margin: 0 auto;
  
`;

export const CardTitle = styled(Typography)`
  font-size: 1.1rem;
`;

export const Description = styled(Typography)`
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const PriceCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`
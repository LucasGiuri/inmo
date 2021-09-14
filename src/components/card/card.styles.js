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
  cursor: pointer;
  border-radius: 12px;
  height: 100%;
  margin: 0 auto;
  outline: none;
  border: none;
  


  transition: 0.5s;

  &:hover {
    background-color: #d8d4cf;
    transform: scale(1.025);
  }
  @media (max-width: 800px) {
    width: 280px;
    height: 100%;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 300px;

  @media (max-width: 450px) {
    max-height: 250px;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
`;

export const CardTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Description = styled(Typography)`
font-weight: bold;
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PriceContainer = styled.div`
  width: 100%;
  padding: 5px;
`

export const PriceTypography = styled(Typography)`
  font-weight: bold;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
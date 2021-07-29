import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #5D6673;
`;

export const StyledCardMedia = styled(CardMedia)`
  @media (max-width: 600px) {
    height: 140px;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)`
  max-width: 345;
  margin: 0 auto;
`;

export const Price = styled(Typography)`
  font-size: 1rem;
`;

export const Description = styled(Typography)`
  font-size: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
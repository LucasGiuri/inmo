import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 420px;
  cursor: pointer;
  padding-bottom: 10px;
  border-radius: 12px;
  &:hover {
    transition: 1.5s;
    background-color: #999;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledCardMedia = styled(CardMedia)`
  height: 300px;
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

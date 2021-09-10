import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActionArea,
  CardTitle,
  IconsContainer,
  LinkContainer,
  IconContainer,
  PriceContainer,
  PriceTypography
} from './card.styles';

function MediaCard({
  id, img, tittle, description, price, rooms, baths, m2, garage, rent
}) {

  return (
    <LinkContainer to={`/property/${id}`}>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia image={img} title={tittle} component='img' />
          <CardContent>
            <PriceContainer>
            <CardTitle gutterBottom variant='h5' >
              {description}
          </CardTitle>
            </PriceContainer>
            <PriceTypography variant='body2' color='textSecondary' component='p'>
              US$ {price}
            </PriceTypography>
          </CardContent>
        </StyledCardActionArea>
        <IconsContainer>
          <IconContainer>
            <Icon name='bed' />
            <span>{rooms}</span>
          </IconContainer>
          <IconContainer>
            <Icon name='bath' />
            <span>{baths}</span>
          </IconContainer>
          <IconContainer>
            <Icon name='m2' />
            <span>{m2}</span>
          </IconContainer>
          <IconContainer>
            <Icon name='car' />
            <span>{garage}</span>
          </IconContainer>
        </IconsContainer>
      </StyledCard>
    </LinkContainer>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  baths: PropTypes.string.isRequired,
  rooms: PropTypes.string.isRequired,
  m2: PropTypes.string.isRequired
};

export default MediaCard;

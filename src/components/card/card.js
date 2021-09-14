import React from "react";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from "prop-types";
import Icon from "../icon/icon";
import {
  StyledCard,
  StyledCardMedia,
  StyledCardActionArea,
  CardTitle,
  IconsContainer,
  LinkContainer,
  IconContainer,
  TitleContainer,
  PriceContainer,
  PriceTypography,
  Price
} from "./card.styles";

function MediaCard({
  id,
  img,
  tittle,
  description,
  onSalePrice,
  rentPrice,
  rooms,
  baths,
  m2,
  garage,
}) {
  return (
    <LinkContainer to={`/property/${id}`}>
      <StyledCard>
        <StyledCardActionArea>
          <StyledCardMedia image={img} title={tittle} component="img" />
          <CardContent>
            <TitleContainer>
              <CardTitle gutterBottom variant="h5">
                {description}
              </CardTitle>
            </TitleContainer>
            <Price>
            {onSalePrice && (
              <PriceContainer>
                <PriceTypography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Venta US${onSalePrice.toLocaleString()}
                </PriceTypography>
              </PriceContainer>
            )}
            {rentPrice && (
              <PriceContainer>
                <PriceTypography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Alquiler ${rentPrice.toLocaleString()}
                </PriceTypography>
              </PriceContainer>
            )}
            </Price>
          </CardContent>
        </StyledCardActionArea>
        <IconsContainer>
          <IconContainer>
            <Icon name="bed" />
            <span>{rooms}</span>
          </IconContainer>
          <IconContainer>
            <Icon name="bath" />
            <span>{baths}</span>
          </IconContainer>
          <IconContainer>
            <Icon name="m2" />
            <span>{m2}</span>
          </IconContainer>
          <IconContainer>
            <Icon name="car" />
            <span>{garage}</span>
          </IconContainer>
        </IconsContainer>
      </StyledCard>
    </LinkContainer>
  );
}

MediaCard.propTypes = {
  id: PropTypes.string.isRequired,
  onSalePrice: PropTypes.number,
  rentPrice: PropTypes.number,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  baths: PropTypes.number.isRequired,
  rooms: PropTypes.number.isRequired,
  m2: PropTypes.number.isRequired,
};

MediaCard.defaultProps = {
  onSalePrice: null,
  rentPrice: null,
};

export default MediaCard;

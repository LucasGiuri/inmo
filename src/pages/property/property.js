import React, { useState, useEffect, useCallback } from "react";
import Map from "../../components/map/map";
import { useStateContext } from "../../state";
import Typography from "@material-ui/core/Typography";
import Carousel, { Modal, ModalGateway } from "react-images";
import PropTypes from "prop-types";
import GalleryCmp from "../../components/gallery/gallery";
import Layout from "../../components/layout/layout";
import { ContactXs } from "../../components/contactXs/contactXs";
import {
  Aside,
  PrincipalData,
  Price,
  TitleContainer,
  PriceContainer,
  IconsContainer,
  IconsAndAdressContainer,
  Icons,
  IconContainer,
  DetailsWrapper,
  DetailsContainer,
  DetailItem,
  DetailKey,
  DetailValue,
  DescriptionTypography,
  TitleTypography,
} from "./property.styles";
import Space from "../../components/space/space";
import Icon from "../../components/icon/icon";
import { useParams } from "react-router-dom";
import { convertData, photoConverter, fetchData } from "./property.helpers";

const subtitle = "Descripcion";

function Property(size) {
  const { id } = useParams();
  const [{ properties }, dispatch] = useStateContext();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    if (properties.length) {
      const p = properties[0].find((p) => p.id === id);
      const newData = convertData(p.data);
      const photos = newData.photos
        .map((ph) => photoConverter(ph))
        .filter((ph) => ph !== undefined);
      setProperty({ ...newData, photos });
    } else {
      const response = await fetchData("property");
      if (response) dispatch({ type: "ADD", payload: response.results });
    }
    setIsLoading(false);
  }, [properties]);

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const position = [51.505, -0.09];

  return (
    <>
      {property && (
        <Layout>
          <Aside>
            <Space vertical double />
            <Space vertical double />
            <GalleryCmp photos={property.photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={property.photos.map((x) => {
                      return {
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title,
                      };
                    })}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <Space vertical double />
            <Space vertical double />
            <PrincipalData>
              <TitleContainer>
                <TitleTypography variant="h3">{property.title}</TitleTypography>
              </TitleContainer>
              <Space vertical double />
              <Space vertical double />
              <PriceContainer>
                {property.price && <Price variant="h5">{property.price}</Price>}
                <Space vertical double />
                <Space vertical double />
                {property.rent_price && (
                  <Price variant="h5" component="h4">
                    {property.rent_price}
                  </Price>
                )}
              </PriceContainer>
            </PrincipalData>
            <Space vertical double />
            <Space vertical double />
            <IconsContainer>
              <IconsAndAdressContainer>
                <Space vertical double />
                <TitleTypography variant="h5">
                  {property.street_name} {property.number}
                </TitleTypography>
                <Space vertical double />
                <Icons>
                  <IconContainer>
                    <Icon size="L" name="bed" />
                    <Space vertical double />
                    <span>
                      <TitleTypography
                        variant="h7"
                        color="textSecondary"
                        component="p"
                      >
                        {property.rooms}
                      </TitleTypography>
                    </span>
                  </IconContainer>
                  <IconContainer>
                    <Icon size="L" name="bath" />
                    <Space vertical double />
                    <span>
                      <TitleTypography
                        variant="h7"
                        color="textSecondary"
                        component="p"
                      >
                        {property.baths}
                      </TitleTypography>
                    </span>
                  </IconContainer>
                  <IconContainer>
                    <Icon size="L" name="m2" />
                    <Space vertical double />
                    <span>
                      <TitleTypography
                        variant="h7"
                        color="textSecondary"
                        component="p"
                      >
                        {property.m2}
                      </TitleTypography>
                    </span>
                  </IconContainer>
                  <IconContainer>
                    <Icon size="L" name="car" />
                    <Space vertical double />
                    <span>
                      <TitleTypography
                        variant="h7"
                        color="textSecondary"
                        component="p"
                      >
                        {property.cochera}
                      </TitleTypography>
                    </span>
                  </IconContainer>
                </Icons>
              </IconsAndAdressContainer>
              <ContactXs />
            </IconsContainer>
            <Space vertical double />
            <Space vertical double />
            <TitleTypography variant="h3" color="textSecondary" component="p">
              Descripción
            </TitleTypography>
            <Space vertical double />
            <Space vertical double />
            <DescriptionTypography>
              {property.description}
            </DescriptionTypography>
            <Space vertical double />
            <Space vertical double />
            <Typography variant="h4" color="textSecondary" component="p">
              Detalles
            </Typography>
            <Space vertical double />
            <DetailsWrapper>
              <DetailsContainer>
                {property.details[0].map((d) => {
                  const { key, value } = d;
                  return (
                    <DetailItem key={key}>
                      <DetailKey>{key}:</DetailKey>
                      <DetailValue>{value}</DetailValue>
                    </DetailItem>
                  );
                })}
              </DetailsContainer>
              <DetailsContainer>
                {property.details[1].map((d) => {
                  const { key, value } = d;
                  return (
                    <DetailItem key={key}>
                      <DetailKey>{key}:</DetailKey>
                      <DetailValue>{value}</DetailValue>
                    </DetailItem>
                  );
                })}
              </DetailsContainer>
            </DetailsWrapper>
            <Space vertical double />
            <Space vertical double />
            <Typography variant="h4" color="textSecondary" component="p">
              Ubicación
            </Typography>
            <Space vertical double />
            <Space vertical double />
            <Map
              mapPosition={[
                property["map"].latitude,
                property["map"].longitude,
              ]}
            />
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
            {console.log(property.details)}
          </Aside>
        </Layout>
      )}
    </>
  );
}

Property.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  detailsTitle: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  garage: PropTypes.string.isRequired,
  m2: PropTypes.number.isRequired,
  bath: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  deteails: PropTypes.array,
  photos: PropTypes.array,
};

Property.defaultProps = {
  double: false,
  half: false,
  height: "",
  vertical: false,
  width: "",
  title: "",
  subtitle: "",
  description: "",
  detailsTitle: "",
  rooms: 0,
  garage: "",
  m2: 0,
  bath: 1,
  price: 0,
};

export default Property;

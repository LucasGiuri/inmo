import React, { useState, useEffect, useCallback } from 'react';
import Map from '../../components/map/map';
import { useStateContext } from '../../state';
import Typography from '@material-ui/core/Typography';
import Carousel, { Modal, ModalGateway } from 'react-images';
import PropTypes from 'prop-types';
import GalleryCmp from '../../components/gallery/gallery';
import Layout from '../../components/layout/layout';

import {
  Aside,
  Price,
  TitleContainer,
  IconsContainer,
  IconContainer,
  DetailsWrapper,
  DetailsContainer,
  DetailItem,
  DetailKey,
  DetailValue
} from './property.styles';
import Space from '../../components/space/space';
import Icon from '../../components/icon/icon';
import {
  useParams,
} from 'react-router-dom';
import { convertData, photoConverter, fetchData } from './property.helpers';

const subtitle = 'Descripcion';
const description = 'Duplex penthouse with 120 square meters distributed over 2 floors with parking and storage room. FIRST FLOOR: fully furnished kitchen, complete bathroom, living room furnished with high quality furniture and leather sofa, room (study) with sofa bed and furniture and a glass desk for the computer (I do not have a detailed photo but you can see it in the photos of the living room that has a red sofa bed and sliding glass door and glass square wall), terrace with a table and two chairs and a bench. SECOND FLOOR: furnished room with main bathroom equipped and with hydromassage bathtub, another room also equipped with a bedside table, mattress and bedside table (the mattress and bed base do not appear in the photo but I have';

function Property() {
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
      const photos = newData.photos.map((ph) => photoConverter(ph)).filter((ph) => ph !== undefined);
      setProperty({ ...newData, photos });
    }
    else {
      const response = await fetchData('property');
      if (response) dispatch({ type: 'ADD', payload: response.results });
    }
    setIsLoading(false);
  }, [properties])

  const openLightbox = useCallback((index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const position = [51.505, -0.09];

  console.log('property', property && property['map']);

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
                        caption: x.title
                      }
                    })}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <Space vertical double />
            <Space vertical double />
            <TitleContainer>
              <Typography variant='h3' color='textSecondary' component='p'>
                {property.title}
              </Typography>
              <Price variant='h4' component='h4'>
                {property.price}
              </Price>
            </TitleContainer>
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
            <IconsContainer>
              <IconContainer>
                <Icon name='bed' />
                <span>{property.rooms}</span>
              </IconContainer>
              <IconContainer>
                <Icon name='bath' />
                <span>{property.baths}</span>
              </IconContainer>
              <IconContainer>
                <Icon name='m2' />
                <span>{property.m2}</span>
              </IconContainer>
              <IconContainer>
                <Icon name='car' />
                <span>{property.garage}</span>
              </IconContainer>
            </IconsContainer>
            <Space vertical double />
            <Space vertical double />
            <Typography variant='h4' color='textSecondary' component='p'>
              {subtitle}
            </Typography>
            <Space vertical double />
            <Space vertical double />
            <Typography variant='p' color='textSecondary' component='p'>
              {description}
            </Typography>
            <Space vertical double />
            <Space vertical double />
            <Typography variant='h4' color='textSecondary' component='p'>
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
                  )
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
                  )
                })}
              </DetailsContainer>
            </DetailsWrapper>
            <Space vertical double />
            <Space vertical double />
            <Typography variant='h4' color='textSecondary' component='p'>
              Ubicación
            </Typography>
            <Space vertical double />
            <Space vertical double />
            <Map mapPosition={[property['map'].latitude, property['map'].longitude]} />
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
            <Space vertical double />
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
  garage: PropTypes.bool.isRequired,
  m2: PropTypes.number.isRequired,
  bath: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  deteails: PropTypes.array,
  photos: PropTypes.array
};

Property.defaultProps = {
  double: false,
  half: false,
  height: '',
  vertical: false,
  width: '',
};

export default Property;

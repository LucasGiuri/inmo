import React, { useState, useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import GalleryCmp from '../../components/gallery/gallery';

import {
  Aside,
  Price,
  IconsContainer,
  IconContainer,
  MapContainer,
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

const photos = [
  {
    src: 'http://www.sofia-rtd.com/blog/wp-content/uploads/2017/05/rascacielos-desde-una-vista-de-angulo-bajo_1359-159.jpg',
    width: 4,
    height: 31
  },
  {
    src: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg',
    width: 4,
    height: 3
  },

  {
    src: 'https://pix10.agoda.net/hotelImages/103/1030438/1030438_15081214210034117680.png?s=1024x768',
    width: 4,
    height: 3
  },
  {
    src: 'http://www.sofia-rtd.com/blog/wp-content/uploads/2017/05/rascacielos-desde-una-vista-de-angulo-bajo_1359-159.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'http://www.sofia-rtd.com/blog/wp-content/uploads/2017/05/rascacielos-desde-una-vista-de-angulo-bajo_1359-159.jpg',
    width: 2,
    height: 1
  },
  {
    src: 'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/10/biggest-philly-apartments-station-at-willow-grove-model-apartment-petrucci-residential.jpg',
    width: 2,
    height: 1
  },
  {
    src: 'https://pix10.agoda.net/hotelImages/103/1030438/1030438_15081214210034117680.png?s=1024x768',
    width: 4,
    height: 3
  }
];

const details = [
  { key: 'm2', value: '120m' },
  { key: 'garaje', value: 'Si' },
  { key: 'apto profesional', value: 'Si' }
];

const subtitle = 'Descripcion';
const detailsTitle = 'Detalles';
const description = 'Duplex penthouse with 120 square meters distributed over 2 floors with parking and storage room. FIRST FLOOR: fully furnished kitchen, complete bathroom, living room furnished with high quality furniture and leather sofa, room (study) with sofa bed and furniture and a glass desk for the computer (I do not have a detailed photo but you can see it in the photos of the living room that has a red sofa bed and sliding glass door and glass square wall), terrace with a table and two chairs and a bench. SECOND FLOOR: furnished room with main bathroom equipped and with hydromassage bathtub, another room also equipped with a bedside table, mattress and bedside table (the mattress and bed base do not appear in the photo but I have';
const title = 'Duplex for sale in calle vila de lloret, 181';
const rooms = 4;
const price = 30000;
const baths = 2;
const garage = 'Si';
const m2 = 120;

function Property() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((_, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <Aside>
      <Typography variant='h3' color='textSecondary' component='p'>
          {title}
        </Typography>
        <Space vertical double />
        <Space vertical double />
        <Price gutterBottom variant='h6' component='p'>
          ${price}
        </Price>
        <Space vertical double />
        <Space vertical double />
        <GalleryCmp photos={photos} onClick={openLightbox} />
        {/* <Gallery
          photos={photos}
          columns={1}
          onClick={openLightbox}
        /> */}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
        <Space vertical double />
        <Space vertical double />
        <Space vertical double />
        <Space vertical double />
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
          {detailsTitle}
        </Typography>
        <Space vertical double />
        <DetailsContainer>
          {details.map((d) => {
            const { key, value } = d;
            return (
              <DetailItem key={key}>
                <DetailKey>{key}:</DetailKey>
                <DetailValue>{value}</DetailValue>
              </DetailItem>
            )
          })}
        </DetailsContainer>
        <Space vertical double />
        <Space vertical double />
        <Typography variant='h4' color='textSecondary' component='p'>
          {detailsTitle}
        </Typography>
        <Space vertical double />
        <Space vertical double />
        <MapContainer
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.93895638281!2d-58.456548884770385!3d-34.60570508045904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca05a97be0c9%3A0x7627cc9ab0caa2e7!2sKON%20PROPIEDADES!5e0!3m2!1ses-419!2sar!4v1628037671833!5m2!1ses-419!2sar'
          loading='lazy'
        />
      </Aside>
    </>

  );
}



export default Property;

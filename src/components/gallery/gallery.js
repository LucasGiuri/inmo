import React from 'react';
import { GalleryContainer, FirstColumn, SecondColumn, MainImg, SecondaryImg } from './gallery.styles';

const Gallery = ({ photos }) => {
  const newPhotosArr = photos.slice(0, 5);

  return (
    <>
      <GalleryContainer>
        <FirstColumn>
          <MainImg src={newPhotosArr[0].src} alt='' />
        </FirstColumn>
        <SecondColumn>
          <SecondaryImg src={newPhotosArr[1].src} alt='' />
          <SecondaryImg src={newPhotosArr[2].src} alt='' />
          <SecondaryImg src={newPhotosArr[3].src} alt='' />
          <SecondaryImg src={newPhotosArr[4].src} alt='' />
        </SecondColumn>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

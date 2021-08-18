import React from 'react';
import { GalleryContainer, FirstColumn, SecondColumn, MainImg, SecondaryImg } from './gallery.styles';

const Gallery = ({ photos, onOpenImg }) => {
  const newPhotosArr = photos.slice(0, 5);

  return (
    <>
      <GalleryContainer>
        <FirstColumn>
          <MainImg onClick={() => onOpenImg(0)} src={newPhotosArr[0].src} alt='' />
        </FirstColumn>
        <SecondColumn>
          <SecondaryImg onClick={() => onOpenImg(1)} src={newPhotosArr[1].src} alt='' />
          <SecondaryImg onClick={() => onOpenImg(2)} src={newPhotosArr[2].src} alt='' />
          <SecondaryImg onClick={() => onOpenImg(3)} src={newPhotosArr[3].src} alt='' />
          <SecondaryImg onClick={() => onOpenImg(4)}src={newPhotosArr[4].src} alt='' />
        </SecondColumn>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

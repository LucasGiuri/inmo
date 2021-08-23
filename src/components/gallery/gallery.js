import React from 'react';
import { GalleryContainer, FirstColumn, SecondColumn, MainImg, SecondaryImg } from './gallery.styles';

const Gallery = ({ photos, onClick }) => {
  const newPhotosArr = photos.slice(0, 5);
  console.log('newp', newPhotosArr)

  return (
    <>
      <GalleryContainer>
        <FirstColumn>
          <MainImg onClick={() => onClick(0)} src={newPhotosArr[0].src} alt='' />
        </FirstColumn>
        <SecondColumn>
          <SecondaryImg onClick={() => onClick(1)} src={newPhotosArr[1].src} alt='' />
          <SecondaryImg onClick={() => onClick(2)} src={newPhotosArr[2].src} alt='' />
          <SecondaryImg onClick={() => onClick(3)} src={newPhotosArr[3].src} alt='' />
          <SecondaryImg onClick={() => onClick(4)}src={newPhotosArr[4].src} alt='' />
        </SecondColumn>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

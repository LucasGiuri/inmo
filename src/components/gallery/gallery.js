import React from 'react';
import { GalleryContainer, FirstColumn, SecondColumn, MainImg, SecondaryImg } from './gallery.styles';

const Gallery = ({ photos, onClick }) => {
  const newPhotosArr = photos.slice(0, 5);

  return (
    <>
      <GalleryContainer>
        <FirstColumn>
          <MainImg src={newPhotosArr[0].url} alt='' onClick={() => onClick(0)} />
        </FirstColumn>
        <SecondColumn>
          <SecondaryImg src={newPhotosArr[1].url} alt='' onClick={() => onClick(1)} />
          <SecondaryImg src={newPhotosArr[2].url} alt='' onClick={() => onClick(2)} />
          <SecondaryImg src={newPhotosArr[3].url} alt='' onClick={() => onClick(3)} />
          <SecondaryImg src={newPhotosArr[4].url} alt='' onClick={() => onClick(4)} />
        </SecondColumn>
      </GalleryContainer>
    </>
  );
};

export default Gallery;

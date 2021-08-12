import styled from "styled-components";

export const GalleryContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
`;

export const FirstColumn = styled.div`
  width: 100%;
`;

export const SecondColumn = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const MainImg = styled.img`
  overflow: hidden;
  width: 600px;
  height: 400px;
  display: block;
  object-fit: cover;
  border: 2px solid black;
`;

export const SecondaryImg = styled.img`
  width: 300px;
  height: 200px;
  display: block;
  object-fit: cover;
  border: 2px solid black;
`;

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Aside = styled.div`
  color: #fff;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 1200px;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  background: #fff;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

export const Price = styled(Typography)`
  font-weight: 900;
`;

export const DetailsWrapper = styled.div`
  display: flex;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const DetailItem = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
`;

export const DetailKey = styled.div`
  padding: 0 10px;
  font-weight: bold;
`;

export const DetailValue = styled.div`
  padding-left: 1px;
`;

export const MapContainer = styled.iframe`
  width: 75%;
  height: 350px;
  border-radius: 12px;
  border: none;
`;

export const Background = styled.div`
  background-color: #e9f2f1;
`;

export const DescriptionTypography = styled(Typography)`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
`

export const TitleTypography = styled(Typography)`
  font-weight: bold;
  color: #fff;
`

import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Aside = styled.div`
margin: 0 auto;
margin-top: 120px;
  max-width: 1200px;
  padding: 20px 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const Price = styled(Typography)`
  font-size: 1rem;
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
  display: flex;
  border-radius: 12px;
  border: none;
  margin: 15px;
`;

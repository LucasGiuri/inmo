import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContactContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  background-color: #a60321;
  height: 350px;
  margin: 15px;
  border-radius: 12px;
  align-items: center;
  padding: 5px;
`;

export const MapContainer = styled.iframe`
  width: 75%;
  height: 350px;
  display: flex;
  border-radius: 12px;
  border: none;
  margin: 15px;
`;

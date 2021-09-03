import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c4044;

  @media (max-width: 700px) {
    padding: 20px;
  }
`;

export const FooterLink = styled.a`
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  transition: 0.6s;

  &:hover {
    color: #732727;
  }
`;

export const WebsiteRights = styled.p`
  font-weight: bold;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const InfoContainer = styled.div`
  padding: 20px 100px 0px 100px;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const ContactContainer = styled.div`
  color: #fff;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #a60321;
  margin: 15px;
  border-radius: 12px;
  align-items: center;
  font-weight: bold;
  font-size: 10px;

  @media (max-width: 700px) {
    width: 100%;
    height: 75%;
  }
`;


export const MapContainer = styled.iframe`
  height: 288px;
  width: 100%;
  border-radius: 12px;
  border: none;
  margin: 0 15px;

  @media (max-width: 600px) {
    width: 10=%;
    height: 144px;
    margin-bottom: 15px;
  }
`;

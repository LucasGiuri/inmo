import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  width: 100%;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  margin-left: 45px;
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

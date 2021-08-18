import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterLink,
  WebsiteRights,
} from "./footer.styles";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo>
          <FooterLink href="/">
            KON
          </FooterLink>
        </FooterLogo>
        <WebsiteRights>
          Web developed by Lucas Giuri & Manuel Salvadores
        </WebsiteRights>
      </FooterContainer>
    </>
  );
};

export default Footer;

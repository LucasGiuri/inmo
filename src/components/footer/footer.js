import React from "react";
import {
  FooterContainer,
  FooterLogo,
  FooterLink,
  WebsiteRights,
  ContactContainer,
  InfoContainer,
  MapContainer,
} from "./footer.styles";

export const Footer = () => {
  return (
      <FooterContainer>
        <InfoContainer>
          <ContactContainer>
            <h2>Av. San Martín 1802</h2>
            <h2>Llamanos</h2>
            <p>+54 9 11 6299 1141</p>
            <h2>Whatsapp</h2>
            <p>+54 9 11 6588 2242</p>
            <h2>Escribinos</h2>
            <p>info@konpropiedades.com.ar</p>
          </ContactContainer>
          <MapContainer
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.93895638281!2d-58.456548884770385!3d-34.60570508045904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca05a97be0c9%3A0x7627cc9ab0caa2e7!2sKON%20PROPIEDADES!5e0!3m2!1ses-419!2sar!4v1628037671833!5m2!1ses-419!2sar"
            loading="lazy"
          />
        </InfoContainer>
        <WebsiteRights>
          Web developed by Lucas Giuri & Manuel Salvadores
        </WebsiteRights>
      </FooterContainer>
  );
};

export default Footer;

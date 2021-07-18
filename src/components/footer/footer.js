import React from 'react';
import city from "../../assets/city.png"
import { FooterContainer, ImgStyles } from './footer.styles';

function Footer() {
    return (
        <FooterContainer>
          <ImgStyles src={city} />
        </FooterContainer>
    );
}

export default Footer;

import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import {
  Li,
  IconContainer,
  IconStyled,
  NavBarStyled,
  ToolbarStyled,
  SocialMediaAndlinks,
  Logo,
  IconMobileContainer,
  SocialMediaMobile,
  LogoAndMediaContainer,
  Links
} from "./navbar.styles";
import  logo  from "../../assets/logo.jpg"

export default function Navbar() {

  return (
    <>
      <NavBarStyled position="fixed">
        <ToolbarStyled>
          <LogoAndMediaContainer>
          <Logo src={logo}/>
          <SocialMediaMobile>
            <IconMobileContainer>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconStyled>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <FacebookIcon />
            </IconStyled>
            <IconStyled
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconStyled>
          </IconMobileContainer>
          </SocialMediaMobile>
          </LogoAndMediaContainer>
          <SocialMediaAndlinks>
            <IconContainer>
              <IconStyled
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <InstagramIcon />
              </IconStyled>
              <IconStyled
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <FacebookIcon />
              </IconStyled>
            </IconContainer>
          <Links>
            <Li>Alquileres</Li>
            <Li>Ventas</Li>
            <Li>Tasaciones</Li>
            <Li to="/novedades">Novedades</Li>
            <Li to="/contact">Contacto</Li>
          </Links>
          </SocialMediaAndlinks>
        </ToolbarStyled>
      </NavBarStyled>
    </>
  );
}

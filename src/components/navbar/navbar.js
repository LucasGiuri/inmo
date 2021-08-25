import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

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
  Links,
  LogoLink,
} from "./navbar.styles";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  return (
    <>
      <NavBarStyled position="fixed">
        <ToolbarStyled>
          <LogoAndMediaContainer>
            <LogoLink href="/home">
              <Logo src={logo} />
            </LogoLink>
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
                ></IconStyled>
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
              <Li to="/rentals">Alquileres</Li>
              <Li to="/on-sale">Ventas</Li>
              <Li to="/news">Novedades</Li>
              <Li to="/contact">Contacto</Li>
            </Links>
          </SocialMediaAndlinks>
        </ToolbarStyled>
      </NavBarStyled>
    </>
  );
}

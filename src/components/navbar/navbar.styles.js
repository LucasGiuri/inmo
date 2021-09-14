import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    height: 75px;
  }
`;

export const SocialMediaAndlinks = styled.div`
  display: flex;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Li = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  border: none;
  padding: 0 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #DA050D;
    transform: scale(1.055);
    border-bottom: 1px solid #DA050D;
  }

  @media (max-width: 370px) {
    font-size: 0.6rem;
  }

`;

export const IconContainer = styled.div`
  display: block;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const IconStyled = styled(IconButton)`
`;

export const NavBarStyled = styled(AppBar)`
  background-color: black;
  padding: 10px 0;
`;

export const Logo = styled.img`
  width: 180px;
  @media (max-width: 850px) {
    width: 100px;
  }
`;
export const SocialMediaMobile = styled.div`
  display: flex;
`;

export const IconMobileContainer = styled.div`
  display: none;
  @media (max-width: 850px) {
    display: block;
  }
`;

export const LogoAndMediaContainer = styled.div`
  display: flex;
  width: auto;

  @media (max-width: 850px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const Links = styled.div`
  display: flex;
  width: auto;

  @media (max-width: 850px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const LogoLink = styled.a`
color: #fff;
  border: none;
  margin: auto;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #732727;
  }
  text-decoration: none;
  
`
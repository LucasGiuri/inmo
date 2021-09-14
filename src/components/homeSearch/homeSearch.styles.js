import styled, { css, keyframes } from "styled-components";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import { FaSearchLocation } from "react-icons/fa";

const fadeIn = keyframes`
 from {
     opacity: 0;
 }

 to {
     opacity: 1;
 }
`;

export const HomeSearchWrapper = styled.div`
  position: relative;
  margin-top: 85px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(https://frtassets.fotocasa.es/statics/img/home_search_bg_v2_full.webp);
  width: 100%;
  height: 400px;
`;

export const HomeSearchContainer = styled.div`
  color: #fff;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  margin: 0 auto;
  border-radius: 12px 12px 0px 0px;
  height: 70%;
  width: 60%;

  @media (max-width: 1200px) {
    overflow: hidden;
    width: 75%;
    height: 75%;
  }

  @media (max-width: 850px) {
    height: 75%;
  }
  @media (max-width: 1100px) {
    height: 75%;
    padding: 10px;
  }
`;

export const HomeSearchHeader = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HomeSearchSelector = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom: 1px solid;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const HomeSearchInputs = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const SearchSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchBarButton = styled(Button)`
  display: flex;
  color: #fff;
  background: #121212;
  font-weight: bold;
  border: 2px solid #a60321;
  border-radius: 4px;
  padding: 8px;
  transition: 0.8s;
  margin: 5px;

  &:hover {
    background-color: red;
  }
`;

export const SearchBarTypography = styled(Typography)`
  color: #fff;
  font-weight: bold;

  @media (max-width: 850px) {
    display: flex;
    font-size: 1.4rem;
  }
`;

export const SearchBarSubtitleTypography = styled(Typography)`
  color: #fff;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const SearchBarRadioBtnGrp = styled(RadioGroup)`
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-direction: row;
`;

export const StyledRadio = styled(Radio)`
  color: #a60321;
`;

export const HomeSwitcher = styled(Switch)`
  color: #a60321;
`;



export const MobileSearchInput = styled.input`
  display: none;
  width: 75%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 1100px) {
    display: block;
  }
`;

export const IconMagnifyingGlass = styled(FaSearchLocation)`
  height: 1.25rem;
  width: 1.25rem;
  fill: #a60321;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

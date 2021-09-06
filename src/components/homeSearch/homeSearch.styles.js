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
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(https://frtassets.fotocasa.es/statics/img/home_search_bg_v2_full.webp);
  height: 45vh;
`;

export const HomeSearchContainer = styled.div`
  color: #fff;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  margin: 0 auto;
  width: 1200px;
  border-radius: 12px;

  @media (max-width) {
    width: 600px;
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
`;

export const HomeSearchInputs = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const SearchSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SearchBarButton = styled(Button)`
  height: 100%;
  width: auto;
  background-color: #a60321;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-self: flex-end;
  transition: 1.2s;
  border-radius: 50px;


  &:hover {
    background-color: red;
  }
`;

export const SearchBarTypography = styled(Typography)`
  color: #fff;
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

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 4px solid #a60321;
  background: #121212;
  transition: all 0.8s ease-out;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 50%;
      border: 4px solid #a60321;
      background: #121212;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  color: #fff;
  background: #121212;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

export const IconMagnifyingGlass = styled(FaSearchLocation)`
  height: 1.25rem;
  width: 1.25rem;
  fill: #a60321;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

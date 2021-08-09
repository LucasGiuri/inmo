import styled from "styled-components";
import background from "../../assets/background.jpg";

export const LayoutContainer = styled.div.attrs(() => ({}))`
  margin-top: ${(props) => props.marginTop || "0px"};
  padding: ${(props) => props.padding || "20px 50px"};
  height: ${(props) => props.height || "100%"};
  background-image: ${(props) => `url(${props.background || background})`};
`;

import styled from "styled-components";
import appraisalsbg from "../../assets/appraisalsbg.jpg";

export const LayoutContainer = styled.div.attrs(() => ({}))`
  margin-top: ${(props) => props.marginTop || "0px"};
  padding: ${(props) => props.padding || "20px 50px"};
  height: ${(props) => props.height || "30%"};
  background-image: ${(props) => `url(${props.background || appraisalsbg})`};
`;

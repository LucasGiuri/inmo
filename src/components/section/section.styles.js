import styled from "styled-components";

export const Container = styled.div.attrs(() => ({}))`
 padding: ${(props)=>props.padding || "40px 0px"};
 width: 100%;
 background: ${(props) => `${props.background || "red"}`}
`
import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({}))`
 padding: ${(props) => (props.padding || '40px 100px')};
 width: 100%;
 background: ${(props) => (props.background || '')};
`;

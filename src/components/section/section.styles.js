import styled from 'styled-components';

export const Container = styled.div.attrs(() => ({}))`
 padding: ${(props) => (props.padding || '40px 100px')};
 background-image: ${(props) => (props.image || '')};
 background: ${(props) => (props.background || '')};
 height: ${(props) => (props.height || '')};
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color: #fff;
overflow: hidden;
`;

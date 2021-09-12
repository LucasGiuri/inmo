import styled, { keyframes } from 'styled-components';

export const LoadingText = styled.div`
  text-align: center;
  color: #0095F2;
`;

export const SecondLine = styled.p`
  color: #4C5769;
`;

export const LoadingWrapper = styled.div.attrs(({ withoutMessage, height }) => {
  let finalHeight = height;
  if (height) {
    finalHeight = withoutMessage ? 100 : 150; // min height depends on message
    if (height > finalHeight) finalHeight = height;
    finalHeight = `${finalHeight}px`;
  }
  return { finalHeight };
})`
  align-items: center;
  display: flex;
  flex-direction: ${({ showSmallSpinner }) => (showSmallSpinner ? 'row' : 'column')};
  height:  ${({ finalHeight }) => finalHeight || '100%'};
  justify-content: center;
  width: 100%;
  padding: ${({ withoutMessage, showSmallSpinner }) => (withoutMessage && !showSmallSpinner ? '40px 20px 20px 20px' : '20px')};
`;
export const skCircleFadeDelay = keyframes`
  0% {
    opacity: 0;
  }
  39% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;
export const SkFadingCircle = styled.div`
  margin-right: ${({ showSmallSpinner, withoutMessage }) => (showSmallSpinner && !withoutMessage ? '20px' : null)};
  margin-bottom: ${({ showSmallSpinner }) => (showSmallSpinner ? null : '20px')};
  width: ${({ showSmallSpinner }) => (showSmallSpinner ? '20px' : '40px')};
  height: ${({ showSmallSpinner }) => (showSmallSpinner ? '20px' : '40px')};
  position: relative;
`;

export const SkCircle = styled.div.attrs(({ index }) => {
  let delay = 0;
  let degs = 0;
  if (index > 0) {
    delay = -1.2 + (index * 0.1);
    degs = index * 30;
  }
  return {
    degs: `${degs}deg`,
    delay: `${delay}s`
  };
})`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: rotate(${(p) => p.degs});
  &::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #0095F2;
    border-radius: 100%;
    animation: ${skCircleFadeDelay} 1.2s infinite ease-in-out both;
    animation-delay: ${(p) => p.delay};
  }
`;

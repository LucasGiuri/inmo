import React from 'react';
import styled from 'styled-components';

import loadingIcon from '../assets/loading.svg';

const SpinnerStyle = styled.div`
  ${(props) => props.inline && `
    display: inline;
    position: relative;
    top: 3px;
    right: 2px;
  `}

  .spinner {
    width: ${(props) => (props.sm ? '14px' : '32px')};
    height: ${(props) => (props.sm ? '14px' : '32px')};
    position: relative;
    animation: loader-rotate 1s linear infinite;
    margin-bottom: 9px;
    right: 4px;
  }

  @keyframes loader-rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }
`;

const Spinner = (props) => (
  <SpinnerStyle {...props}>
    <img className='spinner' src={loadingIcon} alt='spinner' />
  </SpinnerStyle>
);

export default Spinner;

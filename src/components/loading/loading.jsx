// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

import {
  LoadingText,
  LoadingWrapper,
  SecondLine,
  SkCircle,
  SkFadingCircle
} from './loading.styles';

export default function Loading({
  dataTestPrefix,
  height,
  message,
  messageLine2,
  showSmallSpinner,
  withoutMessage,
}) {
  return (
    <LoadingWrapper
      data-test={`${dataTestPrefix}-loading`}
      showSmallSpinner={showSmallSpinner}
      height={height}
      withoutMessage={withoutMessage}
    >
      <SkFadingCircle showSmallSpinner={showSmallSpinner} withoutMessage={withoutMessage}>
        <SkCircle index='0' />
        <SkCircle index='1' />
        <SkCircle index='2' />
        <SkCircle index='3' />
        <SkCircle index='4' />
        <SkCircle index='5' />
        <SkCircle index='6' />
        <SkCircle index='7' />
        <SkCircle index='8' />
        <SkCircle index='9' />
        <SkCircle index='10' />
        <SkCircle index='11' />
      </SkFadingCircle>
      {!withoutMessage && (message || messageLine2) && (
        <LoadingText>
          {message}
          {messageLine2 && (
            <SecondLine>
              {messageLine2}
            </SecondLine>
          )}
        </LoadingText>
      )}
    </LoadingWrapper>
  );
}

Loading.propTypes = {
  dataTestPrefix: PropTypes.string,
  height: PropTypes.number,
  message: PropTypes.string,
  messageLine2: PropTypes.string,
  showSmallSpinner: PropTypes.bool,
  withoutMessage: PropTypes.bool,
};

Loading.defaultProps = {
  dataTestPrefix: 'loading',
  height: 0,
  message: 'Loading',
  messageLine2: '',
  showSmallSpinner: false,
  withoutMessage: false,
};

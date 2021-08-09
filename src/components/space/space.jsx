import React from 'react';
import PropTypes from 'prop-types';

import SpaceContainer from './space.styles';

function Space({
  double,
  half,
  height,
  vertical,
  width
}) {
  return (
    <SpaceContainer
      double={double}
      half={half}
      height={height}
      vertical={vertical}
      width={width}
    />
  );
}

Space.propTypes = {
  double: PropTypes.bool,
  half: PropTypes.bool,
  height: PropTypes.string,
  vertical: PropTypes.bool,
  width: PropTypes.string
};

Space.defaultProps = {
  double: false,
  half: false,
  height: '',
  vertical: false,
  width: ''
};

export default Space;

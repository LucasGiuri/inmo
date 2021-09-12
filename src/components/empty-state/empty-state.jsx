import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import {
  EmptyStateContainer, Message, Title, Image
} from './empty-state.styles';
import noResultsIcon from './assets/noResults.svg';

const data = {
  noResults: {
    image: noResultsIcon,
    title: 'No hay resultados disponibles',
    message: 'Por favor modifique su búsqueda',
  }
};

const EmptyState = ({
  backgroundColor,
  action,
  dataTestPrefix,
  image,
  message,
  title,
  type
}) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState();
  const Icon = image || data[type].image;

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef]);

  return (
    <EmptyStateContainer
      backgroundColor={backgroundColor}
      data-test={`${dataTestPrefix}-empty-state`}
      ref={containerRef}
      containerWidth={containerWidth}
    >
      <Image
        alt={type}
        src={Icon}
      />
      <Title>{title || data[type].title}</Title>
      <Message>{message || data[type].message}</Message>
      {action}
    </EmptyStateContainer>
  );
};

EmptyState.propTypes = {
  action: PropTypes.node,
  backgroundColor: PropTypes.string,
  dataTestPrefix: PropTypes.string,
  image: PropTypes.node,
  message: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

EmptyState.defaultProps = {
  backgroundColor: 'transparent',
  action: undefined,
  dataTestPrefix: 'empty-state',
  image: undefined,
  message: undefined,
  title: undefined,
  type: 'noResults'
};

EmptyState.props = {
  type: { noResults: 'noResults' }
};

export default EmptyState;

import styled from 'styled-components';

const sizes = {
  half: '4px',
  simple: '8px',
  double: '16px'
};

export default styled.div.attrs(({
  double,
  half,
  height,
  vertical,
  width
}) => {
  let size = sizes.simple;
  if (half) size = sizes.half;
  else if (double) size = sizes.double;
  else if (height) size = height;
  else if (width) size = width;

  return {
    heightDef: vertical ? size : '1px',
    withDef: vertical ? '1px' : size,
  };
})`
  height: ${(p) => p.heightDef};
  width: ${(p) => p.withDef};
`;

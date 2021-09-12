import styled from 'styled-components';

const standardWidth = 400;
export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => (p.backgroundColor)};
  width: 100%;
  max-width: 475px;
  padding: ${(p) => (p.containerWidth >= standardWidth ? '40px' : '16px')};
`;

export const Message = styled.p`
  color: #4C5769;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  max-width: 500px;
  text-align: center;
  padding: 0;
  padding-bottom: 10px;
  margin: 0;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #4C5769;
  font-weight: 700;
  padding: 16px 0 8px 0;
`;

export const Image = styled.img`
  max-width: 100%;
`;

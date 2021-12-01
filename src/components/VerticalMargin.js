import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export default function VerticalMargin({ children }) {
  return <Container>{children}</Container>;
}

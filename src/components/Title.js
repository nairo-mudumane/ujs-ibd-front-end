import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 1rem;
`;
export default function Title({ text }) {
  return (
    <Container className="container-small">
      <h2>{text}</h2>
    </Container>
  );
}

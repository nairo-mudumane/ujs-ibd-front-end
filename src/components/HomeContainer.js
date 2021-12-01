import React from 'react';
import styled from 'styled-components';

const StyledHomeContainer = styled.main`
  width: 100%;
  min-height: 60vh;
  margin-top: 5rem;
  .links {
    height: 100%;
  }
`;
export default function HomeContainer({ children }) {
  return <StyledHomeContainer>{children}</StyledHomeContainer>;
}

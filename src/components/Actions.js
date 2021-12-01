import React from 'react';
import styled from 'styled-components';

const StyledActions = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function Actions({ children }) {
  return <StyledActions>{children}</StyledActions>;
}

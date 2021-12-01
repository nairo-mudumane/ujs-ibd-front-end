import React from 'react';
import styled from 'styled-components';

const StyledLoginHeader = styled.header`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: center;

  padding: 1rem 0;
  background: #27cafb;
`;
export default function LoginHeader({ children }) {
  return <StyledLoginHeader>{children}</StyledLoginHeader>;
}

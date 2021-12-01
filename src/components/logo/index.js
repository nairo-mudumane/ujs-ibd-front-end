import React from 'react';
import styled from 'styled-components';
import logoSrc from '../../assets/images/logo.jpg';

const StyledLogo = styled.a`
  max-width: 4rem;
`;
export default function Logo() {
  return (
    <StyledLogo href="/">
      <img src={logoSrc} alt="" />
    </StyledLogo>
  );
}

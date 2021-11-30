import React from 'react';
import styled from 'styled-components';
import logoSrc from '../../assets/images/logo.jpg';

export default function Logo() {
  const StyledLogo = styled.div`
    max-width: 4rem;
  `;
  return (
    <StyledLogo>
      <img src={logoSrc} alt="" />
    </StyledLogo>
  );
}

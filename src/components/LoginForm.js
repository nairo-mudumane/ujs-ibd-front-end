import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
  .radio-container {
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .radio-label {
    cursor: pointer;
    padding: 0rem 1rem;
    margin: 0 1rem;
  }
  .isLoading,
  .error {
    font-size: 1em;
  }
  .isLoading {
    color: #3f3;
  }
  .error {
    color: red;
  }
`;

export default function LoginForm({ children }) {
  return <StyledLoginForm>{children}</StyledLoginForm>;
}

import styled from 'styled-components';

export const LoginHeader = styled.header`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  align-items: center;

  padding: 1rem 0;
  background: #27cafb;
`;
export const LoginTitle = styled.div`
  /* background: red; */
`;
export const LoginBody = styled.main`
  /* background: red; */
`;
export const LoginForm = styled.form`
  /* background: red; */
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

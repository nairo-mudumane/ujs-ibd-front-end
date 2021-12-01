import React from 'react';
import Head from '../../components/data/Head';
import LoginHeader from '../../components/LoginHeader';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import Form from './Form';

export default function Login() {
  return (
    <>
      <Head title="Login" />

      <LoginHeader>
        <Logo />
        <Title className="no-margin" text="Departamento de cultura" />
      </LoginHeader>

      <div className="container">
        <VerticalMargin>
          <p>Preencha os campos.</p>
          <Form />
        </VerticalMargin>
      </div>
    </>
  );
}

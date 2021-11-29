import React from 'react';
import Head from '../../components/data/Head';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import { LoginBody, LoginHeader, LoginTitle } from '../login/Styles';
import Form from './Form';

export default function AddUser() {
  return (
    <>
      <Head title="Cadastrar Estudante" />

      <LoginHeader>
        <Logo />

        <LoginTitle>
          <Title className="no-margin" text="Departamento de cultura" />
        </LoginTitle>
      </LoginHeader>

      <LoginBody className="container">
        <VerticalMargin>
          <p>Preencha os campos.</p>
          <Form />
        </VerticalMargin>
      </LoginBody>
    </>
  );
}

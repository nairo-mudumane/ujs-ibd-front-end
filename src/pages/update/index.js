import React from 'react';
import Head from '../../components/data/Head';
import LoginHeader from '../../components/LoginHeader';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import Search from './Search';

export default function Update() {
  return (
    <>
      <Head title="Actualizar Dados" />

      <LoginHeader>
        <Logo />
        <Title text="Departamento de cultura" />
      </LoginHeader>

      <VerticalMargin>
        <div className="container mb-3">
          <Search />
        </div>
      </VerticalMargin>
    </>
  );
}

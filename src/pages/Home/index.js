import React from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/data/Head';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import { LoginHeader } from '../login/Styles';
import { HomeContainer } from './styles';

export default function Home() {
  const links = [
    { to: 'new', label: 'Novo Talento' },
    { to: 'list', label: 'Listar Talentos' },
    { to: 'login', label: 'Login' },
  ];
  return (
    <>
      <Head title="Departamento de Cultura" />

      <LoginHeader>
        <Logo />
        <Title text="Departamento de cultura" />
      </LoginHeader>

      <VerticalMargin>
        <div className="container d-flex align-items-center justify-content-center">
          <h2>Bem vindo ao nosso sistema</h2>
        </div>

        <HomeContainer className="container d-flex justify-content-center align-items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="btn btn-sm btn-primary ms-5"
            >
              {link.label}
            </Link>
          ))}
        </HomeContainer>
      </VerticalMargin>
    </>
  );
}

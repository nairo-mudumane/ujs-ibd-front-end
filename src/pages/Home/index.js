import React from 'react';
import { Link } from 'react-router-dom';
import { getLogin } from '../../components/data/GetLogin';
import Head from '../../components/data/Head';
import HomeContainer from '../../components/HomeContainer';
import LoginHeader from '../../components/LoginHeader';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';

export default function Home() {
  getLogin();

  const links = [
    { to: 'list', label: 'Listar' },
    { to: 'new', label: 'Novo' },
    // { to: 'update', label: 'Actualizar' },
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

        <HomeContainer>
          <div className="links container d-flex align-items-center justify-content-center">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="btn btn-sm btn-primary ms-5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </HomeContainer>
      </VerticalMargin>
    </>
  );
}

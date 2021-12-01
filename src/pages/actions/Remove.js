import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Head from '../../components/data/Head';
import LoginHeader from '../../components/LoginHeader';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';

export default function Remove() {
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState();
  const params = useParams();
  const url = `http://localhost:8081/remove/students/${params.id}`;

  React.useEffect(() => deleteUser(), []);

  async function deleteUser() {
    setIsLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.log(err);
      });
  }

  if (error)
    return (
      <>
        <Head title="Remover" />

        <LoginHeader>
          <Logo />
          <Title text="Departamento de cultura" />
        </LoginHeader>

        <VerticalMargin>
          <div className="container">
            <p>Erro ao apagar.</p>
          </div>
        </VerticalMargin>
      </>
    );

  return (
    <>
      <Head title="Lista de Talentos" />

      <LoginHeader>
        <Logo />
        <Title text="Departamento de cultura" />
      </LoginHeader>

      <VerticalMargin>
        <div className="container mb-4">
          {isLoading ? (
            <p className="alert-heading">Carregando...</p>
          ) : (
            <div>
              <p className="text-success">Apagado com sucesso</p>
              <Link to="/list">Listar</Link>
            </div>
          )}
        </div>
      </VerticalMargin>
    </>
  );
}

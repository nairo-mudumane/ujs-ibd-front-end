import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Actions from '../../components/Actions';
import Head from '../../components/data/Head';
import LoginHeader from '../../components/LoginHeader';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';

export default function List() {
  const [list, setList] = React.useState();
  const [error, setError] = React.useState(false);
  const url = 'http://localhost:8081/students';

  async function getList() {
    await axios
      .get(url)
      .then(({ data }) => {
        setList(data);
      })
      .catch((err) => {
        setError(err);
        console.log(err.message);
      });
  }
  getList();

  if (error)
    return (
      <>
        <Head title="Lista de Talentos" />

        <LoginHeader>
          <Logo />
          <Title text="Departamento de cultura" />
        </LoginHeader>

        <VerticalMargin>
          <div className="container">
            <p>Erro ao carregar dados.</p>
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
        <div className="container mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Curso</th>
                <th scope="col">Talento</th>
                <th scope="col">Accao</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.course}</td>
                    <td>{user.talent}</td>
                    <Actions>
                      <Link
                        to={`/actions/update/${user.id_student}`}
                        className="btn btn-sm btn-primary"
                      >
                        Editar
                      </Link>
                      <Link
                        to={`/actions/remove/${user.id_student}`}
                        className="btn btn-sm btn-danger"
                      >
                        Apagar
                      </Link>
                    </Actions>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </VerticalMargin>
    </>
  );
}

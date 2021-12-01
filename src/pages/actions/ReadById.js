import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Head from '../../components/data/Head';
import Logo from '../../components/logo';
import Title from '../../components/Title';
import VerticalMargin from '../../components/VerticalMargin';
import LoginHeader from '../../components/LoginHeader';

export default function ReadById() {
  const params = useParams();
  const url = `http://localhost:8081/students/${params.id}`;

  async function getUser() {
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getUser();

  return (
    <>
      <Head title="Lista de Talentos" />

      <LoginHeader>
        <Logo />
        <Title text="Departamento de cultura" />
      </LoginHeader>

      <VerticalMargin>
        <div className="container">
          <p>;sdgfklds</p>
        </div>
      </VerticalMargin>
    </>
  );
}

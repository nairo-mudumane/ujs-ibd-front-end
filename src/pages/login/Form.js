import React from 'react';
import axios from 'axios';
import { LoginForm } from './Styles';

export default function Form() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const baseUrl = 'http://localhost:8081/';
  const errorRef = React.useRef(null);

  function removeErrorMsg() {
    setTimeout(() => {
      setError(false);
      console.log('timeout');
    }, 3000);
  }

  async function handleSuubmit(e) {
    e.preventDefault();
    const formFileds = {
      email: email,
      password: password,
    };

    setIsLoading(true);
    console.log(`${baseUrl}${isAdmin}`);
    await axios
      .post(`${baseUrl}${isAdmin}`, formFileds)
      .then((response) => {
        setData(response.data);
        if (!data.error) {
          window.location.replace('/');
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('house erro');
        setError(err);
        setIsLoading(false);
      });
  }

  return (
    <LoginForm className="form" onSubmit={handleSuubmit}>
      <div className="form-group mb-3">
        <label className="form-label">Nome</label>
        <input
          type="email"
          className="form-control"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <label className="form-label">Senha</label>
        <input
          type="password"
          className="form-control"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <div className="radio-container mb-3">
        <p>Entrar como:</p>

        <div className="radio-container form-group mb-3">
          <label className="radio-label">
            Administrador{' '}
            <input
              type="radio"
              name="isAdmin"
              value="admin/login"
              onChange={({ target }) => setIsAdmin(target.value)}
            />
          </label>
          <label className="radio-label">
            Estudante{' '}
            <input
              type="radio"
              name="isAdmin"
              value="login"
              onChange={({ target }) => setIsAdmin(target.value)}
            />
          </label>
        </div>
      </div>
      <div className="form-group mb-3">
        <button type="submit" className="btn btn-sm btn-primary">
          Entrar
        </button>
      </div>
      {isLoading && (
        <div className="isLoading mb-3">
          <p>Verificando</p>
        </div>
      )}
      {error && (
        <div className="error mb-3" ref={errorRef} onLoad={removeErrorMsg}>
          <p>Senha ou email incorrectos!</p>
        </div>
      )}
    </LoginForm>
  );
}

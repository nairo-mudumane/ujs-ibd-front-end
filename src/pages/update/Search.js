import axios from 'axios';
import React from 'react';

export default function Search() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user, setUser] = React.useState();
  const url = 'http://localhost:8081/login';

  async function handleSubmit(e) {
    e.preventDefault();
    const formFields = {
      email: email,
      password: password,
    };
    await axios
      .post(url, formFields)
      .then(({ data }) => {
        setUser(data);
        window.location.assign(`/update/${user.data[0].id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container-sm">
      <p>Insira o email e a senha do aluno.</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Pesquisar
        </button>
      </form>
    </div>
  );
}

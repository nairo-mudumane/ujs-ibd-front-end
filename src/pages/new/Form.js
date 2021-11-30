import axios from 'axios';
import React from 'react';
import { FormContainer } from './FormStyles';

export default function Form() {
  const inputs = [
    {
      type: 'text',
      label: 'Codigo do aluno',
      id: 'id_student',
      name: 'id_student',
    },
    { type: 'text', label: 'Nome', id: 'name', name: 'name' },
    {
      type: 'text',
      label: 'Codigo do talento',
      id: 'id_talent',
      name: 'id_talent',
    },
    { type: 'text', label: 'Curso', id: 'course', name: 'course' },
    { type: 'email', label: 'Email', id: 'email', name: 'email' },
    { type: 'text', label: 'Contacto', id: 'contact', name: 'contact' },
    { type: 'text', label: 'Morada', id: 'address', name: 'address' },
    {
      type: 'text',
      label: 'Numero do documento',
      id: 'numb_document',
      name: 'numb_document',
    },
  ];
  const selects = [
    {
      label: 'Tipo de documento',
      name: 'type_document',
      options: [
        { optLabel: 'BI', optValue: 'bi' },
        { optLabel: 'passport', optValue: 'passport' },
      ],
    },
    {
      label: 'Genero',
      name: 'genere',
      options: [
        { optLabel: 'Masculino', optValue: 'masculino' },
        { optLabel: 'Femenino', optValue: 'femenino' },
      ],
    },
  ];

  const [inputValues, setInputValues] = React.useState({
    id_student: '',
    name: '',
    id_talent: '',
    course: '',
    email: '',
    contact: '',
    address: '',
    numb_document: '',
  });
  const [selectValues, setSelectValues] = React.useState({
    type_document: 'bi',
    genere: 'masculino',
  });

  const handleInputChange = ({ target }) =>
    setInputValues({ ...inputValues, [target.name]: target.value });

  const handleSelectChange = ({ target }) =>
    setSelectValues({ ...selectValues, [target.name]: target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:8081/new';
    const formFields = Object.assign({}, inputValues, selectValues);
    formFields['password'] = '123a';

    await axios
      .post(url, formFields)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <div className="form-group mb-3" key={input.id}>
          <label className="form-label" htmlFor={input.id}>
            {input.label}
          </label>
          <input
            type={input.type}
            id={input.id}
            name={input.name}
            className="form-control"
            required
            autoComplete="off"
            onChange={handleInputChange}
          />
        </div>
      ))}

      {selects.map((select, index) => (
        <div className="form-label" key={index}>
          <label className="form-label">{select.label}</label>
          <select
            className="form-select"
            name={select.name}
            onChange={handleSelectChange}
          >
            {select.options.map((opt, index) => (
              <option value={opt.optValue} key={index} required>
                {opt.optLabel}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="form-group mb-3">
        <button type="submit" className="btn btn-sm btn-primary">
          Cadastrar
        </button>
      </div>
    </FormContainer>
  );
}

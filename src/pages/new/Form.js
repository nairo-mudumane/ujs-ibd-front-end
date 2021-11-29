import React from 'react';
import { FormContainer } from './FormStyles';

export default function Form() {
  const inputs = [
    { type: 'text', label: 'Codigo do aluno', id: 'id_student' },
    { type: 'text', label: 'Nome', id: 'name' },
    { type: 'text', label: 'Codigo do talento', id: 'id_talent' },
    { type: 'text', label: 'Curso', id: 'course' },
    { type: 'email', label: 'Email', id: 'email' },
    { type: 'text', label: 'Contacto', id: 'contact' },
    { type: 'text', label: 'Morada', id: 'address' },
    { type: 'text', label: 'Numero do documento', id: 'numb_document' },
  ];
  const selects = [
    {
      label: 'Tipo de documento',
      value: 'type_document',
      options: [
        { optLabel: 'BI', optValue: 'bi' },
        { optLabel: 'passport', optValue: 'passport' },
      ],
    },
    {
      label: 'Genero',
      value: 'genere',
      options: [
        { optLabel: 'Masculino', optValue: 'masculino' },
        { optLabel: 'Femenino', optValue: 'femenino' },
      ],
    },
  ];

  return (
    <FormContainer>
      {inputs.map((input) => (
        <div className="form-group mb-3" key={input.id}>
          <label className="form-label" htmlFor={input.id}>
            {input.label}
          </label>
          <input
            type={input.type}
            id={input.id}
            className="form-control"
            required
            autoComplete="off"
          />
        </div>
      ))}

      {selects.map((select, index) => (
        <div className="form-label" key={index}>
          <label className="form-label">{select.label}</label>
          <select className="form-select">
            {select.options.map((opt, index) => (
              <option value={opt.optValue} key={index}>
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

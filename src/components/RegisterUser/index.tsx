/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useHistory, useParams } from 'react-router-dom';

interface IRegister {
  nome: string;
  cpf: string;
  email: string;
  endereco: {
    cep: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
  };
}

interface IParamsProps {
  id: string;
}

function GoBack() {
  history.back();
}

const RegisterUser: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<IParamsProps>();
  const [user, setUser] = useState<IRegister>({
    nome: '',
    cpf: '',
    email: '',
    endereco: {
      cep: 0,
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
    },
  });

  return (
    <Form>
      <Form.Group widths="equal" className="general-info">
        <Form.Field
          id="form-input-name"
          control={Input}
          label="Nome"
          placeholder="Nome"
        />
        <Form.Field
          id="form-input-cpf"
          control={Input}
          label="CPF"
          placeholder="CPF"
        />
        <Form.Field
          id="form-input-email"
          control={Input}
          label="Email"
          placeholder="Email"
          error={{
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
      </Form.Group>
      <Form.Group className="address-info">
        <Form.Field
          id="form-input-cep"
          control={Number}
          label="CEP"
          placeholder="CEP"
        />
        <Form.Field
          id="form-input-street"
          control={Input}
          label="Rua"
          placeholder="Rua"
        />
        <Form.Field
          id="form-input-number"
          control={Input}
          label="Número"
          placeholder="Número"
        />
        <Form.Field
          id="form-input-neighborhood"
          control={Input}
          label="Bairro"
          placeholder="Bairro"
        />
        <Form.Field
          id="form-input-city"
          control={Input}
          label="Cidade"
          placeholder="Cidade"
        />
      </Form.Group>
      <Form.Field
        id="form-button-submit"
        control={Button}
        content="Cadastrar"
      />
    </Form>
  );
};

export default RegisterUser;

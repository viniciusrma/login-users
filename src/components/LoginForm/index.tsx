import React from 'react';
import { Button } from 'semantic-ui-react';

const LoginForm = () => {
  return (
    <div className="user-login">
      <h1 className="title">Acessar o Sistema</h1>
      <form autoComplete="nope">
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" />
        </div>
        <Button
          type="submit"
          className="submit-login-button"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;

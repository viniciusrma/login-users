import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterUser from './components/RegisterUser';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <LoginForm />
      <RegisterUser />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

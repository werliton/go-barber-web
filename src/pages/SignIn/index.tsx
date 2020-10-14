import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Background, Container, Content } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Go Barber" />
      <form>
        <h1>Faça seu login</h1>
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <a href="lodd">Esqueci minha senha</a>
      </form>

      <a href="acc">
        <FiLogIn size={20} />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;

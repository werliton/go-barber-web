import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Background, Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Go Barber" />
      <form>
        <h1>Faça seu login</h1>
        <Input type="text" placeholder="E-mail" name="email" icon={FiMail} />
        <Input type="password" placeholder="Senha" name="senha" icon={FiLock} />
        <Button>
          Entrar
        </Button>
        <a href="forget">Esqueci minha senha</a>
      </form>

      <a href="register">
        <FiLogIn size={20} />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;

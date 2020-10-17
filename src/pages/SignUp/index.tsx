import React from 'react';
import {
  FiArrowLeft,
  FiLock, FiLogIn, FiMail, FiUser,
} from 'react-icons/fi';
import { Background, Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="Go Barber" />
      <form>
        <h1>Faça seu cadastro</h1>

        <Input placeholder="E-mail" name="email" icon={FiMail} />
        <Input placeholder="Nome" name="name" icon={FiUser} />
        <Input placeholder="Senha" name="senha" icon={FiLock} type="password" />

        <Button>
          Cadastrar
        </Button>

      </form>

      <a href="register">
        <FiArrowLeft size={20} />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;

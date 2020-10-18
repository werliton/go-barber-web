import React, { useCallback } from 'react';
import {
  FiArrowLeft,
  FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Background, Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string().required().email('Digite um email valido'),
        password: Yup.string().min(6, 'No minimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input placeholder="E-mail" name="email" icon={FiMail} />
          <Input placeholder="Nome" name="name" icon={FiUser} />
          <Input placeholder="Senha" name="senha" icon={FiLock} type="password" />

          <Button>
            Cadastrar
          </Button>

        </Form>

        <a href="register">
          <FiArrowLeft size={20} />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;

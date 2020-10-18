import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Background, Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório').email('Digite um email valido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      formRef.current?.setErrors(getValidationErrors(error));
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h1>Faça seu login</h1>
          <Input type="text" placeholder="E-mail" name="email" icon={FiMail} />
          <Input type="password" placeholder="Senha" name="password" icon={FiLock} />
          <Button>
            Entrar
          </Button>
          <a href="forget">Esqueci minha senha</a>
        </Form>

        <a href="register">
          <FiLogIn size={20} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;

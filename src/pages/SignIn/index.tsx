import React, { useCallback, useRef } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {
  Background, Container, AnimatedContent, Content,
} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInFormData {
    email: string
    password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data:SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().required('Email obrigatório').email('Digite um email valido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ ...data });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'info',
          title: 'Erro na autenticacao',
          description: 'Ocorreu um erro ao fazer login',
        });
      }
    }, [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimatedContent>
          <img src={logo} alt="Go Barber" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>
              Faça seu login
            </h1>
            <Input type="text" placeholder="E-mail" name="email" icon={FiMail} />
            <Input type="password" placeholder="Senha" name="password" icon={FiLock} />
            <Button>
              Entrar
            </Button>
            <a href="forget">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn size={20} />
            Criar conta
          </Link>
        </AnimatedContent>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;

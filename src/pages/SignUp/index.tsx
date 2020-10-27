import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft,
  FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import {
  AnimatedContent, Background, Container, Content,
} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErros';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string().required('Email obrigatório').email('Digite um email valido'),
        password: Yup.string().min(6, 'No minimo 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('users/', data);

      history.push('/');

      addToast({
        title: 'Cadastro realizado com sucesso',
        type: 'success',
        description: 'Você ja pode realizar seu login no GoBarber',
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
            formRef.current?.setErrors(getValidationErrors(error));
            return;
      }
      addToast({
        title: 'Erro no cadastro',
        type: 'error',
        description: 'Aconteceu um erro ao fazer cadastro, verifique suas credenciais',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContent>
          <img src={logo} alt="Go Barber" />
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>

            <Input placeholder="E-mail" name="email" icon={FiMail} />
            <Input placeholder="Nome" name="name" icon={FiUser} />
            <Input placeholder="Senha" name="password" icon={FiLock} type="password" />

            <Button type="submit">
              Cadastrar
            </Button>

          </Form>

          <Link to="/">
            <FiArrowLeft size={20} />
            Voltar para login
          </Link>
        </AnimatedContent>
      </Content>
    </Container>
  );
};

export default SignUp;

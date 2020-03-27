import React from "react";
import {Form} from '@unform/web'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import Input from '../../components/Input'
import TextArea from '../../components/TextArea'


import { Container, Content } from './styles';
import logoImg from "../../assets/logo.svg";



export default function NewIncident() {
  return (
  <Container>
     <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver isso.
          </p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Form onSubmit={() => {}}>
          <Input name="title" placeholder="Título do caso" />
          <TextArea name="description"  placeholder="Descrição" />
          <Input name="value"  placeholder="Valor em reais" />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
  </Container>
  );
}

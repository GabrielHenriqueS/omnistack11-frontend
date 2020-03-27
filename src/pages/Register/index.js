import React from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import Input from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

export default function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <Form onSubmit={() => {}}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Whatsapp" />
          <div className="input-group">
            <Input name="city" placeholder="Cidade" />
            <Input name="UF" placeholder="UF" id="uf" />
          </div>
          <button type="submit" className="button">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}

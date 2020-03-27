import React from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import { FiLogIn } from "react-icons/fi";

import { Container } from "./styles";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";

export default function Logon() {
  return (
    <Container>
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <Form onSubmit={() => {}}>
          <h1>Faça seu logon</h1>
          <Input name="id" placeholder="Sua ID" />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}

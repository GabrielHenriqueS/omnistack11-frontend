import React from "react";
import { Form } from "@unform/web";

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
          <Input name="id" placeholder="Sua ID" />

          <button type="submit">Entrar</button>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}

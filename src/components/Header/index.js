import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";

export default function Header() {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </Container>
  );
}

import React from "react";

import { Container } from "./styles";

import { FiTrash2 } from "react-icons/fi";

import Header from "../../components/Header";
export default function Profile() {
  return (
    <>
      <Header />
      <Container>
        <h1>Casos cadastrados</h1>
        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste:</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste:</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste:</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste:</p>

            <strong>DESCRIÇÃO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </ul>
      </Container>
    </>
  );
}

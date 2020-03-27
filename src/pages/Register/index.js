import React, {useRef} from "react";
import * as Yup from 'yup';
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

import Input from "../../components/Input";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";
import api from '../../services/api'

import logoImg from "../../assets/logo.svg";

export default function Register() {
  const formRef = useRef(null);

  async function handleSubmit(data){
    try {
      // Remove all previous errors
    formRef.current.setErrors({});
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string().email('Informe um email válido').required('O email é obrigatório'),
      whatsapp: Yup.string().required('O whatsapp é obrigatório'),
      city: Yup.string().required('A cidade é obrigatória'),
      UF: Yup.string()
             .min(2,'Informe no mínimo 2 caracteres')
             .max(2,'Informe no máximo 2 caracteres')
             .required('UF'),
    });
    await schema.validate(data, {
      abortEarly: false,
    });
    console.log(data)
    // const id = api.post('register',{

    // });
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
    
  }

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
        <Form ref={formRef} onSubmit={handleSubmit}>
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

import React from "react";
import { Container } from "../../pages/about/about.styles";
import {
  ContactContainer,
  ContactBox,
  LeftArea,
  RightArea,
  InputTextField,
} from "./contactMini.styles";

export const ContactMini = () => {
  return (
    <>
      <Container>
        <ContactBox>
          <LeftArea></LeftArea>
          <RightArea>
            <h2>Contact Us</h2>
            <InputTextField
              type="text"
              class="field"
              placeholder="Nombre"
              required
            />
            <InputTextField
              type="text"
              class="field"
              placeholder="Apellido"
              required
            />
            <InputTextField
              type="email"
              class="field"
              placeholder="Direccion de mail"
              required
            />
            <InputTextField
              type="text"
              class="field"
              placeholder="Numero de contacto"
              required
            />
            <TextArea placeholder="Dejenos su mensaje"/>
            <SubmitButton>Enviar</SubmitButton>
          </RightArea>
        </ContactBox>
      </Container>
    </>
  );
};

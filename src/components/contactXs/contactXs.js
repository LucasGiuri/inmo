import React from "react";
import {
  ContactXsContainer,
  InputTextField,
  Submit,
  Form,
} from "./contactXs.styles";
import Space from "../../components/space/space";
export const ContactXs = () => {
  return (
    <>
      <ContactXsContainer>
        <h3>Programemos una visita!</h3>
        <Form>
          <InputTextField
            type="text"
            class="field"
            placeholder="Nombre y Apellido"
            required
          />
          <Space vertical double />
          <InputTextField
            type="email"
            class="field"
            placeholder="ejemplo@ejemplo.com"
            required
          />
          <Space vertical double />
          <InputTextField
            type="text"
            class="field"
            placeholder="Numero de contacto"
            required
          />
          <Space vertical double />
          <Submit type="submit">Enviar</Submit>
        </Form>
      </ContactXsContainer>
    </>
  );
};

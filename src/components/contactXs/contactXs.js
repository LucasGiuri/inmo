import React from "react";
import { ContactXsContainer, InputTextField, Submit, Form } from "./contactXs.styles";
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

          <InputTextField
            type="email"
            class="field"
            placeholder="ejemplo@ejemplo.com"
            required
          />
          <InputTextField
            type="text"
            class="field"
            placeholder="Numero de contacto"
            required
          />

          <Submit type="submit">Enviar</Submit>
        </Form>
      </ContactXsContainer>
    </>
  );
};

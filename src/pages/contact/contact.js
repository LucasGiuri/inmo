import React from "react";
import {
  Container,
  ContactBox,
  LeftArea,
  RightArea,
  TextArea,
  InputTextField,
  SubmitButton,
  ContactInfoContainer,
} from "./contact.styles";

export const Contact = () => {
  return (
    <>
      <Container>
        <ContactBox>
          <LeftArea>
            <ContactInfoContainer>
              <h2>Caballito</h2>
              <p>Av. San Martín 1802</p>
              <h2>Llamanos</h2>
              <p>+54 9 11 6299 1141</p>
              <h2>Whatsapp</h2>
              <p>+54 9 11 6588 2242</p>
              <h2>Escribinos</h2>
              <p>info@konpropiedades.com.ar</p>
            </ContactInfoContainer>
          </LeftArea>
          <RightArea>
            <h2>¡Vamos a ponernos en contacto!</h2>
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
            <TextArea />
            <SubmitButton>Enviar</SubmitButton>
          </RightArea>
        </ContactBox>
      </Container>
    </>
  );
};

export default Contact;

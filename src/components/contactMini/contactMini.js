import React from "react";

import {
  ContactMiniContainer,
  TextArea,
  InputTextField,
  SubmitButton,
} from "./contactMini.styles";

const ContactMini = () => {
  return (
    <ContactMiniContainer>
      <h2>¡Quiero informacion de esta propiedad!</h2>
      <InputTextField type="text" class="field" placeholder="Nombre" required />
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
    </ContactMiniContainer>
  );
};

export default ContactMini;

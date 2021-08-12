import React from "react";
import {
  ContactMiniContainer,
  TextInput,
  SubmitButton,
} from "./contactMini.styles";

export const ContactMini = () => {
  return (
    <>
      <ContactMiniContainer>
        <TextInput label="Nombre" variant="outlined" />
        <TextInput
          label="Telefono"
          variant="outlined"
          placeholder="+5491199998888"
        />
        <TextInput label="Email" variant="outlined" placeholder="Ejemplo@ejemplo.com" />
        <TextInput
          placeholder="Estoy interesado en visitar esta propiedad."
          variant="outlined"
          multiline
          rows={4}
        />
        <SubmitButton variant="contained" color="secondary">Enviar</SubmitButton>
      </ContactMiniContainer>
    </>
  );
};

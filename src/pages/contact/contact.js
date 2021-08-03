import React from "react";
import Layout from "../../components/layout/layout";
import {
  StyledButton,
  StyledTextField,
  ContactTypography,
  ContactCard,
  ContactGrid,
  ContactCardContent,
} from "./contact.styles";
import {} from "@material-ui/core";

function Contact() {
  return (
    <Layout>
      <ContactGrid>
        <ContactCard>
          <ContactCardContent>
            <ContactTypography gutterBottom variant="h5">
              Contacto
            </ContactTypography>
            <form>
              <ContactGrid container spacing={1}>
                <ContactGrid xs={12} sm={6} item>
                  <StyledTextField
                    placeholder="Complete con su nombre"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </ContactGrid>
                <ContactGrid xs={12} sm={6} item>
                  <StyledTextField
                    placeholder="Complete con su apellido"
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </ContactGrid>
                <ContactGrid item xs={12}>
                  <StyledTextField
                    type="email"
                    placeholder="Ejemplo@ejemplo.com"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </ContactGrid>
                <ContactGrid item xs={12}>
                  <StyledTextField
                    type="phone"
                    placeholder="Ingrese numero de contacto"
                    label="Numero de contacto"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </ContactGrid>
                <ContactGrid item xs={12}>
                  <StyledTextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    placeholder="Dejenos un mensaje"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </ContactGrid>
                <ContactGrid item xs={12}>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Enviar
                  </StyledButton>
                </ContactGrid>
              </ContactGrid>
            </form>
          </ContactCardContent>
        </ContactCard>
      </ContactGrid>
    </Layout>
  );
}

export default Contact;

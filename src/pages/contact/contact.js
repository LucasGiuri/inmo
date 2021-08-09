import React from "react";
import Layout from "../../components/layout/layout";
import { ContactContainer } from "../about/about.styles";
import {
  ContactSection,
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
    <Layout height="90vh" marginTop="100px">
      <ContactSection>
        <ContactContainer>
          <span>
            <h2>Caballito</h2>
            <p>Av. San Martín 1802</p>
            <h2>Llamanos</h2>
            <p>+54 9 11 6299 1141</p>
            <h2>Whatsapp</h2>
            <p>+54 9 11 6588 2242</p>
            <h2>Escribinos</h2>
            <p>info@konpropiedades.com.ar</p>
          </span>
        </ContactContainer>
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
      </ContactSection>
    </Layout>
  );
}

export default Contact;

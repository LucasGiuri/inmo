import React from "react";
import Typography from "@material-ui/core/Typography";
import { Section } from "../../components/section/section";
import infoBg from "../../assets/infoBg.jpg";
import {
  InfoContainer,
  Container,
  ContactContainer,
  StatsContainer,
  Stat,
  MapContainer,
} from "./about.styles.js";

function About() {
  return (
    <Container>
      <Section
        title="Sobre nosotros"
        subtitle='"Desde 1938 seguridad en sus operaciones inmobiliarias"'
      >
        <>
          <Typography variant="p" gutterBottom>
            Herramientas tecnológicas, trato personal y confiabilidad, dan
            debido marco a nuestras operaciones inmobiliarias. Acompañar a
            nuestros clientes en su desarrollo familiar, sus inversiones
            corporativas o su búsqueda de renta, es nuestra vocación. Y
            trabajamos dando seguridad en temas tan delicados. Desde 1938,
            cuatro generaciones en el mismo sitio, cincuenta y tres edificios
            construídos y miles de clientes satisfechos respaldan esta
            trayectoria.
          </Typography>
          <StatsContainer>
            <Stat>
              <Typography variant="h2" gutterBottom>
                53
              </Typography>
              <Typography variant="h5" gutterBottom>
                Edificios construídos
              </Typography>
            </Stat>
            <Stat>
              <Typography variant="h2" gutterBottom>
                80
              </Typography>
              <Typography variant="h5" gutterBottom>
                Años de trayectoria
              </Typography>
            </Stat>
            <Stat>
              <Typography variant="h2" gutterBottom>
                +1000
              </Typography>
              <Typography variant="h5" gutterBottom>
                Clientes satisfechos
              </Typography>
            </Stat>
          </StatsContainer>
        </>
      </Section>
      <Section title="Dónde estamos?" background={infoBg}>
        <InfoContainer>
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
          <MapContainer
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.93895638281!2d-58.456548884770385!3d-34.60570508045904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca05a97be0c9%3A0x7627cc9ab0caa2e7!2sKON%20PROPIEDADES!5e0!3m2!1ses-419!2sar!4v1628037671833!5m2!1ses-419!2sar"
            loading="lazy"
          />
        </InfoContainer>
      </Section>
    </Container>
  );
}

export default About;

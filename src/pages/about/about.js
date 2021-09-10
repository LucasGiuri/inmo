import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/section/section';
import Space from '../../components/space/space';
import {
  Container,
  StatsContainer,
  Stat,
  AboutTypography
} from './about.styles.js';


function About() {
  return (
    <Container>
      <Section
        title='Desde 1938 brindamos seguridad en sus operaciones inmobiliarias'
        background="black"
      >
        <Space vertical double />
        <AboutTypography variant='h5' gutterBottom>
          Herramientas tecnológicas, trato personal y confiabilidad, dan
          debido marco a nuestras operaciones inmobiliarias. Acompañar a
          nuestros clientes en su desarrollo familiar, sus inversiones
          corporativas o su búsqueda de renta, es nuestra vocación. Y
          trabajamos dando seguridad en temas tan delicados. Desde 1938,
          cuatro generaciones en el mismo sitio, cincuenta y tres edificios
          construídos y miles de clientes satisfechos respaldan esta
          trayectoria.
        </AboutTypography>
        <Space vertical double />
        <Space vertical double />
        <StatsContainer>
          <Stat>
            <AboutTypography variant='h3' gutterBottom>
              53
            </AboutTypography>
            <AboutTypography variant='h5' gutterBottom>
              Edificios construídos
            </AboutTypography>
          </Stat>
          <Stat>
            <AboutTypography variant='h3' gutterBottom>
              80
            </AboutTypography>
            <AboutTypography variant='h5' gutterBottom>
              Años de trayectoria
            </AboutTypography>
          </Stat>
          <Stat>
            <AboutTypography variant='h3' gutterBottom>
              +1000
            </AboutTypography>
            <AboutTypography variant='h5' gutterBottom>
              Clientes satisfechos
            </AboutTypography>
          </Stat>
        </StatsContainer>
      </Section>
    </Container>
  );
}

export default About;

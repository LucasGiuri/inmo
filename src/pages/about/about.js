import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../../components/section/section';
import Space from '../../components/space/space';
import {
  Container,
  StatsContainer,
  Stat,
} from './about.styles.js';


function About() {
  return (
    <Container>
      <Section
        title='Desde 1938 brindamos seguridad en sus operaciones inmobiliarias'
        background="darkgrey"
      >
        <Space vertical double />
        <Typography variant='p' gutterBottom>
          Herramientas tecnológicas, trato personal y confiabilidad, dan
          debido marco a nuestras operaciones inmobiliarias. Acompañar a
          nuestros clientes en su desarrollo familiar, sus inversiones
          corporativas o su búsqueda de renta, es nuestra vocación. Y
          trabajamos dando seguridad en temas tan delicados. Desde 1938,
          cuatro generaciones en el mismo sitio, cincuenta y tres edificios
          construídos y miles de clientes satisfechos respaldan esta
          trayectoria.
        </Typography>
        <Space vertical double />
        <Space vertical double />
        <StatsContainer>
          <Stat>
            <Typography variant='h3' gutterBottom>
              53
            </Typography>
            <Typography variant='h5' gutterBottom>
              Edificios construídos
            </Typography>
          </Stat>
          <Stat>
            <Typography variant='h3' gutterBottom>
              80
            </Typography>
            <Typography variant='h5' gutterBottom>
              Años de trayectoria
            </Typography>
          </Stat>
          <Stat>
            <Typography variant='h3' gutterBottom>
              +1000
            </Typography>
            <Typography variant='h5' gutterBottom>
              Clientes satisfechos
            </Typography>
          </Stat>
        </StatsContainer>
      </Section>
    </Container>
  );
}

export default About;

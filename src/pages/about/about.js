import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {
  Container,
  FoundersContainer,
  Founder,
  StatsContainer,
  Stat,
} from './about.styles.js';


function About() {
  return (
    <Container>
      <Typography variant='h3' gutterBottom>
        Sobre nosotros
      </Typography>
      <Typography variant='h5' gutterBottom>
        “Desde 1938 seguridad en sus operaciones inmobiliarias”
      </Typography>
      <Typography variant='p' gutterBottom>
        Herramientas tecnológicas, trato personal y confiabilidad, dan debido marco a nuestras operaciones inmobiliarias. Acompañar a nuestros clientes en su desarrollo familiar, sus inversiones corporativas o su búsqueda de renta, es nuestra vocación. Y trabajamos dando seguridad en temas tan delicados. Desde 1938, cuatro generaciones en el mismo sitio, cincuenta y tres edificios construídos y miles de clientes satisfechos respaldan esta trayectoria.
      </Typography>
      <StatsContainer>
        <Stat>
          <Typography variant='h2' gutterBottom>
            53
          </Typography>
          <Typography variant='h5' gutterBottom>
            Edificios construídos
          </Typography>
        </Stat>
        <Stat>
          <Typography variant='h2' gutterBottom>
            80
          </Typography>
          <Typography variant='h5' gutterBottom>
            Años de trayectoria
          </Typography>
        </Stat>
        <Stat>
          <Typography variant='h2' gutterBottom>
            +1000
          </Typography>
          <Typography variant='h5' gutterBottom>
            Clientes satisfechos
          </Typography>
        </Stat>
      </StatsContainer>
      <FoundersContainer>
        <Founder>
          <Avatar alt='Remy Sharp' src='https://fotos.perfil.com/2019/06/19/trim/950/534/san-martin-738425.png' style={{ height: '200px', width: '200px' }} />
          <Typography variant='h5' gutterBottom>
            Nombre
          </Typography>
        </Founder>
        <Founder>
          <Avatar alt='Remy Sharp' src='https://fotos.perfil.com/2019/06/19/trim/950/534/san-martin-738425.png' style={{ height: '200px', width: '200px' }} />
          <Typography variant='h5' gutterBottom>
            Nombre
          </Typography>
        </Founder>
        <Founder>
          <Avatar alt='Remy Sharp' src='https://fotos.perfil.com/2019/06/19/trim/950/534/san-martin-738425.png' style={{ height: '200px', width: '200px' }} />
          <Typography variant='h5' gutterBottom>
            Nombre
          </Typography>
        </Founder>
      </FoundersContainer>
    </Container>
  );
}

export default About;

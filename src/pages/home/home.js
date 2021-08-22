import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../state';
import Prismic from '@prismicio/client';
import Grid from '../../components/grid/grid';
import About from '../about/about';
import Section from '../../components/section/section';
import {
  AppraisalsContainer,
  AppraisalsInfoContainer,
  Container,
  UiButton,
  ChildContainer,
} from './home.styles';

const apiEndpoint = 'https://inmo.cdn.prismic.io/api/v2';
const accessToken = '';

const Client = Prismic.client(apiEndpoint, { accessToken });

function Home() {
  const [{ properties }, dispatch] = useStateContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'property')
      );
      if (response) {
        dispatch({ type: 'ADD', payload: response.results });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (properties && properties.length > 0) {
      const filtered = properties[0].filter((p) => p.data.propiedad_destacada);
      const filteredData = filtered.map((d) => {
        const { title, hero_image, cochera } = d.data;

        return {
          ...d.data,
          id: d.id,
          img: hero_image.url,
          title: title[0].text,
          garage: cochera ? 'Si' : 'No',
        };
      });
      setData(filteredData);
    }
  }, [properties]);

  return (
    <>
      <About />
      <Section title='Propiedades Destacadas' background='darkgrey'>
        <Grid numRowsLg={3} data={data} />
      </Section>
      <Container>
        <h1>Quieres vender tu propiedad?</h1>
        <UiButton variant="contained">TASA CON NOSOTROS</UiButton>
      </Container>
    </>
  );
}

export default Home;

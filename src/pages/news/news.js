import React, { useState } from 'react';
import data from './data.json';
import Layout from '../../components/layout/layout';
import {
  NovedadesSection,
  IndexContainer,
  Container,
  Wrap,
  Dropdown,
  PlusIcon,
  MinusIcon,
} from './news.styles';

const Novedades = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <Layout>
      <NovedadesSection>
        <IndexContainer>
          <h3>INDICE</h3>
          {data.results.map((item) => (
            <h4 key={item.id}>{item.titulo}</h4>
          ))}
        </IndexContainer>
        <Container>
          {data.results.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h3>{item.titulo}</h3>
                  <span>
                    {clicked === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </Wrap>
                <Dropdown isShown={clicked === index}>
                  <p>{item.contenido}</p>
                </Dropdown>
              </>
            );
          })}
        </Container>
      </NovedadesSection>
    </Layout>
  );
};

export default Novedades

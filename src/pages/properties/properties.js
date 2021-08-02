import React, { useState } from "react";
import data from "./data.json";
import Layout from "../../components/layout/layout";
import Grid from "../../components/grid/grid";
import {
  NovedadesSection,
  IndexContainer,
  Container,
  Wrap,
  Dropdown,
  PlusIcon,
  MinusIcon,
} from "./properties.styles";

const Properties = () => {
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
          <Grid numRowsLg={4} data={data.results} />
        </Container>
      </NovedadesSection>
    </Layout>
  );
};

export default Properties;

import React, { useState } from "react";
import data from "./data.json";
import Layout from "../../components/layout/layout";
import Grid from "../../components/grid/grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  PropertiesSection,
  IndexContainer,
  Container,
  FilterSection,
  Switchers,
} from "./properties.styles";

const Properties = () => {
  return (
    <Layout marginTop="100px">
      <PropertiesSection>
        <IndexContainer>
          <h3>INDICE</h3>
          <FilterSection>
            <FormControlLabel
              control={<Switchers name="gilad" />}
              label="Apto Profesional"
            />
          </FilterSection>
        </IndexContainer>
        <Container>
          <Grid numRowsLg={4} data={data.results} />
        </Container>
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;

import React, { useState } from "react";
import data from "./data.json";
import Layout from "../../components/layout/layout";
import Grid from "../../components/grid/grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  PropertiesSection,
  IndexContainer,
  Container,
  FilterSection,
  Switchers,
  FilterInputLabel,
  FilterSelect,
} from "./properties.styles";

const Properties = () => {
  return (
    <Layout marginTop="100px">
      <PropertiesSection>
        <IndexContainer>
          <h3>INDICE</h3>
          <FilterSection>
            <FormControl variant="outlined">
              <FilterInputLabel>Tipo</FilterInputLabel>
              <FilterSelect
                native
                label="Tipo De Propiedad"
                inputProps={{
                  name: "tipo",
                }}
              >
                <option aria-label="None" value="" />
                <option value={""}>DEPARTAMENTO</option>
                <option value={""}>TIPO CASA PH</option>
                <option value={""}>LOCAL</option>
                <option value={""}>OFICINA</option>
                <option value={""}>TERRENO</option>
                <option value={""}>COCHERA</option>
              </FilterSelect>
            </FormControl>
            <FormControlLabel control={<Switchers />} label="Cochera" />
            <FormControlLabel
              control={<Switchers />}
              label="Apto Profesional"
            />
          </FilterSection>
          <FormControl variant="outlined">
            <FilterInputLabel>Ambientes</FilterInputLabel>
            <FilterSelect
              native
              label="Ambientes"
              inputProps={{
                name: "ambientes",
              }}
            >
              <option aria-label="None" value="" />
              <option value={1}>1 Ambiente</option>
              <option value={2}>2 Ambientes</option>
              <option value={3}>3 Ambientes</option>
              <option value={4}>4 Ambientes</option>
              <option value={5}>5 Ambientes</option>
              <option value={6}>6 Ambientes</option>
            </FilterSelect>
          </FormControl>
        </IndexContainer>
        <Container>
          <Grid numRowsLg={4} data={data.results} />
        </Container>
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;

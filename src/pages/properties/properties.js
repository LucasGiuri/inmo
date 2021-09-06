import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { fetchData } from "../property/property.helpers";
import { useLocation } from "react-router";
import { useStateContext } from "../../state";
import Layout from "../../components/layout/layout";
import Grid from "../../components/grid/grid";
import Space from "../../components/space/space";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {
  PropertiesSection,
  IndexContainer,
  Container,
  FilterSection,
  Switchers,
  FilterTypography,
  StyledRadio,
  PriceInput,
} from "./properties.styles";
import DropdownSelector from "../../components/dropDownSelector/dropDownSelector";

const Properties = ({ id }) => {
  const location = useLocation();
  const [{ properties }, dispatch] = useStateContext();
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState({ id: "TODOS", value: "TODOS" });

  useEffect(async () => {
    const qp = queryString.parse(location.search);
    const hasGarage = qp.garaje === "true";
    setQueryParams(qp);
    setIsLoading(true);
    if (!properties.length) {
      const response = await fetchData("property");
      if (response) dispatch({ type: "ADD", payload: response.results });
    }
    setIsLoading(false);
    if (properties && properties.length > 0) {
      const filtered =
        properties[0] &&
        properties[0].filter((p) => {
          const {
            alquiler,
            venta,
            cochera,
            neighborhood,
            professional,
            ambients,
            price,
          } = p.data;

          if (
            !qp.barrio ||
            (Object.keys(qp).length === 0 && qp.constructor === Object)
          ) {
            return id === "rentals" ? alquiler : venta;
          }
          return (
            (id === "rentals" ? alquiler : venta) &&
            cochera === hasGarage &&
            (qp.barrio !== "TODOS"
              ? qp.barrio.toLowerCase().includes(neighborhoods.toLowerCase())
              : neighborhood)
          );
        });
      const filteredData =
        filtered &&
        filtered.map((d) => {
          const { title, hero_image, cochera } = d.data;
          return {
            ...d.data,
            id: d.id,
            img: hero_image.url,
            title: title[0].text,
            garage: cochera ? "Si" : "No",
          };
        });
      setData(filteredData);
    }
  }, [properties, id]);

  return (
    <Layout marginTop="100px">
      <PropertiesSection>
        <IndexContainer>
          <FilterTypography varian="h4">Filtrar</FilterTypography>
          <FilterSection>
            <FilterTypography varian="h4">Tipo de propiedad</FilterTypography>
            <DropdownSelector
              selected={selected.value}
              setSelected={setSelected}
            />
            <Space vertical double />
            <FilterTypography varian="h4">
              Precio de la propiedad
            </FilterTypography>
            <PriceInput
              type="number"
              label="Precio Mínimo"
              placeholder="Precio Mínimo"
            />
            <PriceInput
              type="number"
              label="Precio Máximo"
              placeholder="Precio Máximo"
            />
            <Space vertical double />
            <FilterTypography varian="h4">
              Cantidad de Ambientes
            </FilterTypography>
            <FormControlLabel
              value="two-ambients"
              checked="two-ambients"
              control={<StyledRadio color="default" />}
              label="1 Ambiente"
            />
            <FormControlLabel
              value="one-ambient"
              checked="two-ambient"
              control={<StyledRadio color="default" />}
              label="2 Ambientes"
            />
            <FormControlLabel
              value="three-ambients"
              checked="three-ambients"
              control={<StyledRadio color="default" />}
              label="3 Ambientes"
            />
            <FormControlLabel
              value="four-ambients"
              checked="four-ambients"
              control={<StyledRadio color="default" />}
              label="4 Ambientes"
            />
            <FormControlLabel
              value="five-ambients"
              checked="five-ambients"
              control={<StyledRadio color="default" />}
              label="5 Ambientes"
            />
            <FormControlLabel
              value="six-ambients"
              checked="six-ambients"
              control={<StyledRadio color="default" />}
              label="6 Ambientes"
            />
            <Space vertical double />
            <FormControlLabel control={<Switchers />} label="Cochera" />
            <FormControlLabel
              control={<Switchers />}
              label="Apto Profesional"
            />
          </FilterSection>
        </IndexContainer>
        <Container>
          <Grid numRowsLg={4} data={data} />
        </Container>
      </PropertiesSection>
    </Layout>
  );
};

export default Properties;

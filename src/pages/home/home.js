import React, { useEffect, useState } from "react";
import { useStateContext } from "../../state";
import Grid from "../../components/grid/grid";
import About from "../about/about";
import Section from "../../components/section/section";
import { fetchData } from "../property/property.helpers";
import HomeSearch from "../../components/homeSearch/homeSearch";
import { HomeContainer, Container, UiButton, BtnLink, HomeTypography, HighlightProperties, BtnContainer } from "./home.styles";

// import Layout from "../../components/layout/layout";

function Home() {
  const [{ properties }, dispatch] = useStateContext();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetchData("property");
    if (response) dispatch({ type: "ADD", payload: response.results });
  }, []);

  useEffect(() => {
    if (properties && properties.length > 0) {
      const filtered =
        properties[0] &&
        properties[0].filter((p) => p.data.propiedad_destacada);
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
  }, [properties]);

  return (
    <HomeContainer>
      <HomeSearch />
      {data && (
        <HighlightProperties>
          <HomeTypography variant="h3">Propiedades Destacadas</HomeTypography>
        {/* // <Section
        //   title="Propiedades Destacadas"
        //   background="black"
        // > */}
          <Grid numRowsXs={12} numRowsLg={3} data={data} />
          </HighlightProperties>
        // </Section>
      )}
      <Container>
        <HomeTypography variant="h4">¿Querés vender tu propiedad?</HomeTypography>
        <HomeTypography variant="h5">Sabemos Como hacerlo.</HomeTypography>
        <BtnContainer>
        <BtnLink href='/contact'>
          <UiButton variant="contained">TASA CON NOSOTROS</UiButton>
        </BtnLink>
        </BtnContainer>
      </Container>
      <About />
    </HomeContainer>
  );
}

export default Home;

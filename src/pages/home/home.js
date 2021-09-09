import React, { useEffect, useState } from "react";
import { useStateContext } from "../../state";
import Grid from "../../components/grid/grid";
import About from "../about/about";
import Section from "../../components/section/section";
import { fetchData } from "../property/property.helpers";
import HomeSearch from "../../components/homeSearch/homeSearch";
import { Container, UiButton, BtnLink, HomeTypography } from "./home.styles";

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
    <>
      <HomeSearch />
      {data && (
        <Section
          title="Propiedades Destacadas"
          background="darkgrey"
        >
          <Grid numRowsXs={12} numRowsLg={3} data={data} />
        </Section>
      )}
      <Container>
        <HomeTypography variant="h3">¿Querés vender tu propiedad?</HomeTypography>
        <BtnLink href='/contact'>
          <UiButton variant="contained">TASA CON NOSOTROS</UiButton>
        </BtnLink>
      </Container>
      <About />
    </>
  );
}

export default Home;

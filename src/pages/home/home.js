import React, { useEffect, useState } from "react";
import { useStateContext } from "../../state";
import Prismic from "@prismicio/client";
import Grid from "../../components/grid/grid";
import Layout from "../../components/layout/layout";
import About from "../about/about";
import { Section } from "../../components/section/section";

const apiEndpoint = "https://inmo.cdn.prismic.io/api/v2";
const accessToken = "";

const Client = Prismic.client(apiEndpoint, { accessToken });

function Home() {
  const [doc, setDocData] = useState(null);
  const [{ properties }, dispatch] = useStateContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "property")
      );
      if (response) {
        dispatch({ type: "ADD", payload: response.results });
        setDocData(response.results[0]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (properties && properties.length > 0) {
      const filteredData = properties[0].map((d) => {
        const { id, title, m2, bath, price, hero_image, cochera } = d.data;
        return {
          img: hero_image.url,
          title: title[0].text,
          id,
          price,
          bath,
          m2,
          garage: cochera ? "Si" : "No",
        };
      });
      setData(filteredData);
    }
  }, [properties]);

  return (
    <Layout>
      <Section title="Propiedades en venta">
        <Grid numRowsLg={3} data={data} />
      </Section>
      <About />
    </Layout>
  );
}

export default Home;

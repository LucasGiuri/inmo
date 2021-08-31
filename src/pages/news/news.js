import React, { useState, useEffect } from "react";
import Prismic from "@prismicio/client";

import Layout from "../../components/layout/layout";

import data from "./data.json";
import {
  NovedadesSection,
  IndexContainer,
  Container,
  Wrap,
  Dropdown,
  PlusIcon,
  MinusIcon,
  Link,
} from "./news.styles";

const apiEndpoint = "https://inmo.cdn.prismic.io/api/v2";
const accessToken = "";

const Client = Prismic.client(apiEndpoint, { accessToken });

const Novedades = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "news")
      );
      if (response) {
        console.log(response);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout marginTop="100px">
      <NovedadesSection>
        <IndexContainer>
          <h3>INDICE</h3>
          {data.results.map((item, index) => (
            <Link
              href={`#news-${index}-span`}
              onClick={() => setClicked(index)}
            >
              <h4 key={item.id}>{item.titulo}</h4>
            </Link>
          ))}
        </IndexContainer>
        <Container>
          {data.results.map((item, index) => {
            return (
              <>
                <Wrap
                  onClick={() => toggle(index)}
                  key={index}
                  id={`news-${index}`}
                >
                  <h4>{item.titulo}</h4>
                  <span
                    style={{ visibility: "hidden", marginTop: "-150px" }}
                    id={`news-${index}-span`}
                  ></span>
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

export default Novedades;

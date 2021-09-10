import React, { useState, useEffect } from 'react';
import { fetchData } from "../property/property.helpers";
import { useStateContext } from "../../state";

import Layout from '../../components/layout/layout';

import {
  NovedadesSection,
  IndexContainer,
  Container,
  Wrap,
  Dropdown,
  PlusIcon,
  MinusIcon,
  Link,
} from './news.styles';

const Novedades = () => {
  const [clicked, setClicked] = useState(false);
  const [{ news }, dispatch] = useStateContext();
  const [data, setData] = useState([]);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(async () => {
    const response = await fetchData('news');
    if (response) dispatch({ type: "ADD_NEWS", payload: response.results });
  }, []);

  useEffect(() => {
    if (news && news.length > 0) {
      const filtered = news[0] && news[0].map((d) => {
        const { title, text_area } = d.data;

          return {
            ...d.data,
            id: d.id,
            title: title && title.length ? title[0].text : '',
            content: text_area
          };
        });
      setData(filtered);
    }
  }, [news]);

  return (
    <Layout marginTop='93px'>
      <NovedadesSection>
        <IndexContainer>
          <h3>INDICE</h3>
          {data && data.map((item) => (
            <Link
              href={`#news-${item.id}-span`}
              onClick={() => setClicked(item.id)}
            >
              <h3 key={item.id}>{item.title}</h3>
            </Link>
          ))}
        </IndexContainer>
        <Container>
          {data && data.map((item) => {
            return (
              <>
                <Wrap
                  onClick={() => toggle(item.id)}
                  key={item.id}
                  id={`news-${item.id}`}
                >
                  <h3>{item.title}</h3>
                  <span
                    style={{ visibility: 'hidden', marginTop: '-150px' }}
                    id={`news-${item.id}-span`}
                  ></span>
                  <span>
                    {clicked === item.id ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </Wrap>
                <Dropdown isShown={clicked === item.id}>
                  <p>{item.content}</p>
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

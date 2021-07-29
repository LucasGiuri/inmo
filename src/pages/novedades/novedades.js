import React, { useState } from "react";
import data from "./data.json";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import { FiPlus, FiMinus } from "react-icons/fi";

const NovedadesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: red;
  width: 100%;
`;

const Container = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width: 50%;
`;

const Wrap = styled.div`
  background-color: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: red;
  width: 100%;
  height: 100px;
  display: ${(p) => (p.isShown ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid red;
  border-top: 1px solid red;

  p {
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
`;

export const Novedades = () => {
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
        <Container>
          {data.results.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.titulo}</h1>
                  <span>{clicked === index ? <FiMinus color='red' /> : <FiPlus color='red' />}</span>
                </Wrap>
                <Dropdown isShown={clicked === index}>
                  <p>{item.contenido}</p>
                </Dropdown>
              </>
            );
          })}
        </Container>
        <div>Hola</div>
      </NovedadesSection>
    </Layout>
  );
};

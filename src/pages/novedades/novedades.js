import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import Layout from "../../components/layout/layout";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const NovedadesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
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
  display: flex;
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
      <IconContext.Provider value={{ color: "red", size: "25px" }}>
        <NovedadesSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.titulo}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.contenido}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </NovedadesSection>
      </IconContext.Provider>
    </Layout>
  );
};

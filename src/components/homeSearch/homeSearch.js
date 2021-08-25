import React from "react";
import {
  HomeSearchContainer,
  HomeSearchHeader,
  HomeSearchSelector,
  Button,
  HomeSearchInputs,
} from "./homeSearch.styles";

const HomeSearch = () => {
  return (
    <HomeSearchContainer>
      <HomeSearchHeader>
          <h2>Queremos ayudarte a encontrar tu lugar</h2>
          <h3>Encontra lo que estas buscando</h3>
      </HomeSearchHeader>
      <HomeSearchSelector>
        <Button>Comprar</Button>
        <Button>Alquilar</Button>
      </HomeSearchSelector>
      <HomeSearchInputs>
          <select>
              <option value="value1">value 1</option>
              <option value="value2">value 2</option>
              <option value="value3">value 3</option>
              <option value="value4">value 4</option>
          </select>
          <input type="text" placeholder="Barrio"></input>
          <Button>Buscar</Button>
      </HomeSearchInputs>
    </HomeSearchContainer>
  );
};

export default HomeSearch;

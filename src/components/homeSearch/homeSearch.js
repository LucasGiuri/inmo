import React from "react";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switchers } from "../../pages/properties/properties.styles"
import {
  HomeSearchWrapper,
  HomeSearchContainer,
  HomeSearchHeader,
  HomeSearchSelector,
  HomeSearchInputs,
  SearchBarButton,
  HomeSearchTextField,
} from "./homeSearch.styles";

const HomeSearch = () => {
  return (
    <HomeSearchWrapper>
      <HomeSearchContainer>
        <HomeSearchHeader>
          <Typography variant="h3">
            Queremos ayudarte a encontrar tu lugar
          </Typography>
          <Typography variant="h4">Sabemos lo que estas buscando</Typography>
        </HomeSearchHeader>
        <HomeSearchSelector>
          <SearchBarButton variant="">Comprar</SearchBarButton>
          <SearchBarButton variant="">Alquilar</SearchBarButton>
          <FormControlLabel control={<Switchers />} label="Cochera" />
        </HomeSearchSelector>
        <HomeSearchInputs>
          <FormControl variant="outlined">
            <InputLabel>Tipo</InputLabel>
            <Select
              native
              label="Tipo"
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
            </Select>
          </FormControl>
          <HomeSearchTextField label="Barrio" variant="outlined" />
          <SearchBarButton variant="contained">Buscar</SearchBarButton>
        </HomeSearchInputs>
      </HomeSearchContainer>
    </HomeSearchWrapper>
  );
};

export default HomeSearch;

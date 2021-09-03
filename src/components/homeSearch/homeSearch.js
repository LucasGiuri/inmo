import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DropdownSelector from "../../components/dropDownSelector/dropDownSelector";
import {
  HomeSearchWrapper,
  HomeSearchContainer,
  HomeSearchHeader,
  HomeSearchSelector,
  HomeSearchInputs,
  SearchBarButton,
  SearchBarTypography,
  SearchBarRadioBtnGrp,
  StyledRadio,
  HomeSwitcher,
  SearchSection,
} from "./homeSearch.styles";
import SearchBox from "../searchBox/searchBox";

const HomeSearch = () => {
  const history = useHistory();
  const [value, setValue] = useState("rentals");
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = () => {
    return history.push({
      pathname: `/${value}`,
      state: {
        barrio: "true",
      },
    });
  };

  return (
    <HomeSearchWrapper>
      <HomeSearchContainer>
        <HomeSearchHeader>
          <SearchBarTypography variant="h3">
            Queremos ayudarte a encontrar tu lugar
          </SearchBarTypography>
          <SearchBarTypography variant="h5">
            Desde 1938 brindamos seguridad en sus operaciones inmobiliarias{" "}
          </SearchBarTypography>
        </HomeSearchHeader>
        <HomeSearchSelector>
          <SearchBarRadioBtnGrp onChange={handleChange}>
            <FormControlLabel
              value="on-sale"
              checked={value === "on-sale"}
              control={<StyledRadio color="default" />}
              label="Comprar"
            />
            <FormControlLabel
              value="rentals"
              checked={value === "rentals"}
              control={<StyledRadio color="default" />}
              label="Alquilar"
            />
          </SearchBarRadioBtnGrp>
          <FormControlLabel
            value="cochera"
            control={<HomeSwitcher color="secondary" />}
            label="Cochera"
          />
        </HomeSearchSelector>
        <HomeSearchInputs>
          <DropdownSelector selected={selected} setSelected={setSelected} />
          <SearchSection>
          <SearchBox />
          <SearchBarButton onClick={onSearch}>Buscar</SearchBarButton>
          </SearchSection>
        </HomeSearchInputs>
      </HomeSearchContainer>
    </HomeSearchWrapper>
  );
};

export default HomeSearch;

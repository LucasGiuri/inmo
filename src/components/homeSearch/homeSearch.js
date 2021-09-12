import { React, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DropdownSelector from "../../components/dropDownSelector/dropDownSelector";
import { buildUrl, typeOfProperty, neighborhoods } from '../../constants';
import Space from '../space/space';
import {
  HomeSearchWrapper,
  HomeSearchContainer,
  HomeSearchHeader,
  HomeSearchSelector,
  HomeSearchInputs,
  SearchBarButton,
  SearchBarTypography,
  SearchBarSubtitleTypography,
  SearchBarRadioBtnGrp,
  StyledRadio,
  HomeSwitcher,
  SearchSection,
  Container,
  IconMagnifyingGlass,
  SearchInput,
  MobileSearchInput
} from "./homeSearch.styles";


const HomeSearch = () => {
  const history = useHistory();
  const targetRef = useRef(null);
  const [searchValue, setSearchValue] = useState('TODOS');
  const [typeOfContract, setTypeOfContract] = useState("rentals");
  const [hasGarage, setHasGarage] = useState(false);
  const [selected, setSelected] = useState({ id: 'TODOS', value: 'TODOS' });
  const [selectedN, setSelectedN] = useState({ id: 'TODOS', value: 'TODOS' });
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  const handleChange = (event) => {
    setTypeOfContract(event.target.value);
  };

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    return history.push({
      pathname: `/${typeOfContract}`,
      search: buildUrl({ neighborhood: searchValue, type: selected.id, garage: hasGarage })
    });
  };

  return (
    <Router>
      <HomeSearchWrapper>
        <HomeSearchContainer>
          <HomeSearchHeader>
            <SearchBarTypography variant="h3">
              Queremos ayudarte a encontrar tu lugar
            </SearchBarTypography>
            <SearchBarSubtitleTypography variant="h5">
              Desde 1938 brindamos seguridad en sus operaciones inmobiliarias{" "}
            </SearchBarSubtitleTypography>
          </HomeSearchHeader>
          <HomeSearchSelector>
            <SearchBarRadioBtnGrp onChange={handleChange}>
              <FormControlLabel
                value="on-sale"
                checked={typeOfContract === "on-sale"}
                control={<StyledRadio color="default" />}
                label="Comprar"
              />
              <FormControlLabel
                value="rentals"
                checked={typeOfContract === "rentals"}
                control={<StyledRadio color="default" />}
                label="Alquilar"
              />
            </SearchBarRadioBtnGrp>
            {/* <FormControlLabel
              value="cochera"
              control={<HomeSwitcher color="secondary" />}
              label="Cochera"
            /> */}
          </HomeSearchSelector>
          <HomeSearchInputs>
            <SearchSection>
              <DropdownSelector
                items={typeOfProperty}
                selected={selected.id}
                setSelected={setSelected}
              />
              <Space double />
              <Space double />
              <DropdownSelector
                items={neighborhoods}
                selected={selectedN.id}
                setSelected={setSelectedN}
              />
              <Space double />
              <Space double />
              <SearchBarButton onClick={onSearch}>Buscar</SearchBarButton>
            </SearchSection>
          </HomeSearchInputs>
        </HomeSearchContainer>
      </HomeSearchWrapper>
    </Router>
  );
};

export default HomeSearch;

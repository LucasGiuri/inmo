import styled from "styled-components";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";

export const HomeSearchWrapper = styled.div`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(https://frtassets.fotocasa.es/statics/img/home_search_bg_v2_full.webp);
  height: 45vh;
`;

export const HomeSearchContainer = styled.div`
  color: #fff;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  margin: 0 auto;
  width: 1200px;
  border-radius: 12px;
`;

export const HomeSearchHeader = styled.div`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const HomeSearchSelector = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom: 1px solid;
  justify-content: space-between;
`;

export const HomeSearchInputs = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

export const SearchSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const SearchBarButton = styled(Button)`
  margin: 5px;
  display: flex;
  color: #fff;
  font-weight: bold;
  transition: 1.2s;
  border-radius: 4px;

  &:hover {
    background-color: red;
  }
`;

export const HomeSearchTextField = styled(TextField)`
  color: #fff;
  margin-left: 5px;
  width: 75%;
`;

export const SearchBarTypography = styled(Typography)`
  color: #fff;
`;

export const SearchBarRadioBtnGrp = styled(RadioGroup)`
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-direction: row;
`;

export const StyledRadio = styled(Radio)`
  color: #a60321;
`;

export const HomeSwitcher = styled(Switch)`
  color: #a60321;
`;

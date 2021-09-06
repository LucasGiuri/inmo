import styled, { keyframes } from "styled-components";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const PropertiesSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const IndexContainer = styled.div`
  padding: 15px;
  color: #fff;
  margin: 3px;
  margin-right: 15px;
  background-color: #a60321;
  height: 100%;
  width: 25%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Switchers = styled(Switch)`
  font-size: 100px;
`;

export const FilterInputLabel = styled(InputLabel)`
  color: #fff;
`;

export const FilterSelect = styled(Select)`
  color: black;
`;

export const FilterTypography = styled(Typography)`
  margin: 10px;
`;

export const StyledRadio = styled(Radio)``;

export const PriceInput = styled.input`
  width: 400px;
  margin-bottom: 5px;
  border: 4px solid #a60321;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  background: #121212;
`;

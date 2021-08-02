import styled from "styled-components";
import {
  Button,
  TextField,
  Typography,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";

export const StyledButton = styled(Button)`
  color: black;
  background-color: #c43939;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: 0.8s;
  &:hover {
    background-color: darkred;
  }
`;

export const StyledTextField = styled(TextField)``;

export const ContactTypography = styled(Typography)`
  padding: 3px 0px;
`;

export const ContactCard = styled(Card)`
  max-width: 45rem;
  padding: 20px 5px;
  margin: 0 auto;
`;

export const ContactGrid = styled(Grid)``;

export const ContactCardContent = styled(CardContent)``;

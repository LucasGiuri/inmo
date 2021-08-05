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
  background-color: #A60321;
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
  width: 100%;
  height: 100%;
`;

export const ContactGrid = styled(Grid)``;

export const ContactCardContent = styled(CardContent)``;

export const ContactSection = styled.div`
  display: flex;
  align-items: top;
  flex-direction: row;
  justify-content: space-between;
`
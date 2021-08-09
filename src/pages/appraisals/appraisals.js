import React from "react";
import {
  AppraisalsContainer,
  AppraisalsInfoContainer,
  Container,
  UiButton,
  ChildContainer,
} from "./appraisals.styles";

export const Appraisals = () => {
  return (
    <AppraisalsContainer>
      <Container>
        <h1>Quieres vender tu propiedad?</h1>
        <UiButton variant="contained">MAS INFORMACION!</UiButton>
      </Container>
      <AppraisalsInfoContainer>
        <ChildContainer>
          <h1>TASA CON NOSOTROS</h1>
          <p>
            Vivi la experiencia de tasar con nosotros.
            Recibi nuestro informe de
            tasacion junto a todas las explicaciones que mereces. Y nuestro plan
            de marketing a la medida de la comercializacion de tu casa.
          </p>
          <UiButton>Quiero tasar!</UiButton>
        </ChildContainer>
      </AppraisalsInfoContainer>
    </AppraisalsContainer>
  );
};

export default Appraisals;

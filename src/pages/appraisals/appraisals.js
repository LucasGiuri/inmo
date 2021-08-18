import React from "react";
import {
  AppraisalsContainer,
  AppraisalsInfoContainer,
  Container,
  UiButton,
  ChildContainer,
  InternalLink,
} from "./appraisals.styles";

export const Appraisals = () => {
  return (
    <AppraisalsContainer>
      <Container>
        <h1>¿Querés vender tu propiedad?</h1>
        <h1>¡Te ayudamos!</h1>
        <InternalLink href="#appraisals" ><UiButton variant="contained">MAS INFORMACION!</UiButton></InternalLink>
      </Container>
      <AppraisalsInfoContainer>
        <ChildContainer id="appraisals">
          <h1>TASA CON NOSOTROS</h1>
          <p>
            Vivi la experiencia de tasar con nosotros.
            Recibi nuestro informe de
            tasacion junto a todas las explicaciones que mereces. Y nuestro plan
            de marketing a la medida de la comercializacion de tu casa.
          </p>
          <UiButton to="/contact">Quiero tasar!</UiButton>
        </ChildContainer>
      </AppraisalsInfoContainer>
    </AppraisalsContainer>
  );
};

export default Appraisals;

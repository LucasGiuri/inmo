import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "./section.styles";

export const Section = ({ children, title, subtitle, background, padding }) => {
  return (
    <Container background={background} padding={padding}>
      {title && (
        <Typography variant="h3" gutterBottom align="center">
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography variant="h5" gutterBottom align="center">
          {subtitle}
        </Typography>
      )}
      {children}
    </Container>
  );
};

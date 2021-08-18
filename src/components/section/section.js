import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "./section.styles";

const Section = ({ children, title, subtitle, background, padding, height }) => {
  return (
    <Container background={background} padding={padding} height={height}>
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


export default Section;
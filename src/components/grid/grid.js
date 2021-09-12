import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import Grid from "@material-ui/core/Grid";

export default function GridComponent({
  data,
  numRowsLg,
  numRowsMd,
  numRowsXs,
}) {
  return (
    <Grid container spacing={3}>
      {data.map((d) => {
        const {
          id, title, img, bath, price, rent_price, m2, rooms, garage, rent
        } = d;

        return (
          <Grid item xs={numRowsXs} md={numRowsMd} lg={numRowsLg} key={id}>
            <Card
              id={id}
              img={img}
              tittle={title}
              m2={m2}
              rooms={rooms}
              baths={bath}
              garage={garage}
              description={title}
              onSalePrice={price}
              rentPrice={rent_price}
              rent={rent}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

GridComponent.propTypes = {
  numRowsLg: PropTypes.number,
  numRowsMd: PropTypes.number,
  numRowsXs: PropTypes.number,
};

GridComponent.defaultProps = {
  property: 3,
  numRowsMd: 6,
  numRowsXs: 6,
};

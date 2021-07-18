import React from 'react';
import Card from '../card/card';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((d) => {
          const { id, title, img, bath, price, m2, rooms, garage } = d;
          return (
            <Grid item xs={6} lg={3} md={4} key={id}>
              <Card
                img={img}
                tittle={title}
                m2={m2}
                rooms={rooms}
                baths={bath}
                garage={garage}
                description={title}
                price={price}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

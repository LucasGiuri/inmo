import React from "react";
import Layout from "../../components/layout/layout";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

function Contact() {
  return (
    <Layout>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Complete con su nombre"
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Complete con su apellido"
                    label="Apellido"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Ejemplo@ejemplo.com"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="phone"
                    placeholder="Ingrese numero de contacto"
                    label="Numero de contacto"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensaje"
                    multiline
                    rows={4}
                    placeholder="Dejenos un mensaje"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Layout>
  );
}

export default Contact;

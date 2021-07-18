import React, { useState, useEffect } from "react";

const initialFValues = {
  id: 0,
  fullName: "",
  mobile: "",
  city: "",
  gender: "male",
  age: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialFValues);

  return( 
    <form>
        <Grid container>
                <Grid item xs={6}>
                <TextField
                variant="outlined"
                label="fullName"
                value={values.fullName}
                />
                <Grid item xs={6}>
                <TextField
                variant="outlined"
                label="Email"
                value={values.email}
                />
            </Grid>
            <Grid item xs={6}>
        </Grid>
    </form>
  )
}

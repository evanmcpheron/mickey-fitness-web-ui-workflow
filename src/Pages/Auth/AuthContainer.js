import React from "react";
import { Container } from "Components/Container";
import LogInForm from "./Components/LogInForm";
import SignUpForm from "./Components/SignUpForm";
import { Grid } from "@mui/material";

export const AuthContainer = () => {
  return (
    <div>
      <Grid container spaceing={2}>
        <Grid item xs={5}>
          <Container elevation={3}>
            <LogInForm />
          </Container>
        </Grid>
        <Grid item xs={5}>
          <Container elevation={5}>
            <SignUpForm />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { Outlet } from "react-router-dom";
import { useEmptyLayoutStyles } from "../../styles";

export default function EmptyLayout() {
  const classes = useEmptyLayoutStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Outlet />
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}

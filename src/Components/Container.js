import React from "react";
import { Paper } from "@mui/material";

export const Container = ({ elevation, ...props }) => {
  return <Paper elevation={elevation}>{props.children}</Paper>;
};

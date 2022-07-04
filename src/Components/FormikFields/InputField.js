import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField } from "@mui/material";

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <TextField autoComplete="off" label={label} {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
};

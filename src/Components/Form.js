import React from "react";
import { Form as Wrapper, Formik } from "formik";
import { InputField } from "./FormikFields/InputField";
import { CheckboxField } from "./FormikFields/CheckboxField";
import { Button, Typography } from "@mui/material";

export const Form = ({
  fields,
  validationSchema,
  initialValues,
  title,
  submitButtonValue,
  includeReset,
  onSubmit,
}) => {
  const fieldTypeSelector = (field) => {
    const { label, name, type, fieldType, disabled } = field;

    switch (fieldType) {
      case "checkbox":
        return <CheckboxField label={label} name={name} disabled={disabled} />;
      default:
        return <InputField label={label} name={name} type={type} />;
    }
  };

  return (
    <div className="Form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => {
          return (
            <div>
              <Typography variant={"h3"}>{title ? title : ""}</Typography>
              <Wrapper>
                {fields.map((field, index) => {
                  return <div key={index}>{fieldTypeSelector(field)}</div>;
                })}

                <Button variant="contained" color="success" type="submit">
                  {submitButtonValue ? submitButtonValue : "Submit"}
                </Button>
                {includeReset ? (
                  <Button variant="contained" color="error" type="reset">
                    Reset
                  </Button>
                ) : null}
              </Wrapper>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

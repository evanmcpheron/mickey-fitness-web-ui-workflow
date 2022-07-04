import React from "react";
import { Form } from "Components/Form";

export const AuthForm = ({
  validate,
  initialValues,
  fields,
  title,
  includeReset,
  onSubmit,
}) => {
  console.log(
    "🚀 ~ file: AuthForm.js ~ line 12 ~ initialValues",
    initialValues
  );
  return (
    <Form
      validationSchema={validate}
      initialValues={initialValues}
      fields={fields}
      title={title}
      includeReset={includeReset}
      onSubmit={(values) => onSubmit(values)}
    />
  );
};

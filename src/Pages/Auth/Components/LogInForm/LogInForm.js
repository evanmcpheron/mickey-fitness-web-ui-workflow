import React from "react";
import { AuthForm } from "../AuthForm";
import { validateLogIn } from "./LogInFormValidation";
import { initValueLogIn, fieldsLogIn, submitLogIn } from "./LogInFormFuncs";

export const LogInForm = () => {
  return (
    <AuthForm
      validationSchema={validateLogIn}
      initialValues={initValueLogIn}
      fields={fieldsLogIn}
      title={"Log In"}
      includeReset={true}
      onSubmit={(value) => submitLogIn(value)}
    />
  );
};

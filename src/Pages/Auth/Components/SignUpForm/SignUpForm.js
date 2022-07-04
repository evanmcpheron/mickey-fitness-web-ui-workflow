import React from "react";
import { AuthForm } from "../AuthForm";
import { validateSignUp } from "./SignUpFormValidation";
import { initValueSignUp, fieldsSignUp, submitSignUp } from "./SignUpFormFuncs";

export const SignUpForm = () => {
  return (
    <AuthForm
      validationSchema={validateSignUp}
      initialValues={initValueSignUp}
      fields={fieldsSignUp}
      title={"Sign Up"}
      includeReset={true}
      onSubmit={(value) => submitSignUp(value)}
    />
  );
};

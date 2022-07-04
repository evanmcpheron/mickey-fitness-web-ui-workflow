import * as Yup from "yup";

export const validateSignUp = Yup.object({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("An email is required"),
  password: Yup.string()
    .min(6, "The password must be at least 6 characters long")
    .required("A password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "The passwords must match"
  ),
});

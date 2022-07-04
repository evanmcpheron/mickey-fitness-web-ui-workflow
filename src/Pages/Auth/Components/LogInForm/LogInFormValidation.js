import * as Yup from "yup";

export const validateLogIn = Yup.object({
  email: Yup.string()
    .email("Please provide a valid email")
    .required("An email is required"),
  password: Yup.string()
    .min(6, "The password must be at least 6 characters long")
    .required("A password is required"),
});

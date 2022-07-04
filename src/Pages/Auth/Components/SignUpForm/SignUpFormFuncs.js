export const fieldsSignUp = [
  { name: "email", label: "Email", type: "text" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirmPassword", label: "Confirm Password", type: "password" },
];

export const initValueSignUp = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const submitSignUp = (value) => {
  console.log(value);
};

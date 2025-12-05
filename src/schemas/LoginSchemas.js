import * as yup from "yup";

const LoginSchemas = yup.object().shape({
  name: yup
    .string()
    .required("Bitte gib deinen Namen ein")
    .matches(/^[A-Za-zÄÖÜäöüß ]{3,}$/, "Name muss mindestens 3 Buchstaben haben"),
  email: yup
    .string()
    .required("Bitte gib deine E-Mail ein")
    .email("Bitte eine gültige E-Mail-Adresse eingeben"),
  interests: yup.string(), 
});

export default LoginSchemas;

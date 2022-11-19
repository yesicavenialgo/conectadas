import * as yup from "yup";
import { FORMS_MESSAGES } from "../../constants/forms";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(FORMS_MESSAGES.EMAIL)
    .required(FORMS_MESSAGES.REQUIRED),
  pass: yup
    .string()
    .required(FORMS_MESSAGES.REQUIRED)
    .min(8, FORMS_MESSAGES.PASS_SIZE)
    .matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]/, FORMS_MESSAGES.PASS_MATCHES),
});

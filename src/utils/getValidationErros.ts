import { ValidationError } from 'yup';

interface Errors{
    [key: string]: string
}

export default function getValidationErrors(errors: ValidationError): Errors {
  const validationErrors: Errors = {};

  errors.inner.forEach((item) => {
    validationErrors[item.path] = item.message;
  });
  return validationErrors;
}

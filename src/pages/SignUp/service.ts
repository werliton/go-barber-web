import { useCallback } from 'react';
import * as Yup from 'yup';

interface Response {
    handleSubmit: (data:any) =>Promise<void>
}
const SignUpService = ({ formData }: any): Response => {
  const handleSubmit = useCallback(async (formData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatorio'),
        email: Yup.string().required().email('Digite um email valido'),
        password: Yup.string().min(6, 'No minimo 6 caracteres'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { handleSubmit };
};

export default SignUpService;

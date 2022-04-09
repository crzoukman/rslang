import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Введите корректную электронную почту')
    .required('Требуется ввести электронную почту'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .required('Требуется ввести пароль'),
});
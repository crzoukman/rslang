import * as yup from 'yup';

export const validationSchema = yup.object({
  username: yup
    .string()
    .min(6, 'Имя пользователя должно содержать не менее 6 символов')
    .required('Требуется ввести имя пользователя'),
  email: yup
    .string()
    .email('Введите корректную электронную почту')
    .required('Требуется ввести электронную почту'),
  password: yup
    .string()
    .min(8, 'Пароль должен содержать не менее 8 символов')
    .required('Требуется ввести пароль'),
  changepassword: yup.string().when("password", {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf(
      [yup.ref("password")],
      "Пароли должны совпадать"
    )
  })
});
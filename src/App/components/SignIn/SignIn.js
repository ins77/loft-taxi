import React, { Fragment } from 'react';
import { Typography, Box, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import withAuthLayout from '../../containers/withAuthLayout';
import FormikInput from '../../shared/FormikInput';

const SignIn = ({ signInError, handleSubmitSignIn }) => (
  <Fragment>
    <Typography variant="h5" component="h3">Войти</Typography>
    <Box mt={1}>
      <Typography variant="body1">
        {'Новый пользователь? '}
        <Link component={RouterLink} to="/signup">
          Зарегистрируйтесь
        </Link>
      </Typography>
    </Box>
    <Formik 
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmitSignIn}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Введите корректный email')
          .required('Поле обязательное для заполнения'),
        password: Yup.string()
          .min(6, 'Пароль должен состоять минимум из 6 символов')
          .required('Поле обязательное для заполнения'),
      })}
    >
      <Form data-testid="signin-form">
        <FormikInput
          name="email"
          margin="normal"
          label="Email"
          fullWidth
        />
        <FormikInput
          name="password"
          margin="normal"
          label="Пароль"
          type="password"
          fullWidth
          errorMessage={signInError}
        />
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit">Войти</Button>
        </Box>
      </Form>
    </Formik>
  </Fragment>
);

export default withAuthLayout(SignIn);

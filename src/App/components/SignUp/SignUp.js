import React, { Fragment } from 'react';
import { Typography, Box, Grid, Button, Link } from '@material-ui/core';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import withAuthLayout from '../../containers/withAuthLayout';
import FormikInput from '../../shared/FormikInput';

const SignUp = props => {
  const { signUpError, handleSubmitSignUp, isSignUpSubmitted } = props;

  if (isSignUpSubmitted) {
    return <Redirect to="/signin" />;
  }

  return (
    <Fragment>
      <Typography variant="h5" component="h3">
        Регистрация
      </Typography>
      <Box mt={1}>
        <Typography variant="body1">
          {'Уже зарегистрирован? '}
            <Link component={RouterLink} to="/signin">
              Войти
            </Link>
        </Typography>
      </Box>
      <Formik 
        initialValues={{ email: '', password: '', name: '', surname: '' }}
        onSubmit={handleSubmitSignUp}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Введите корректный email')
            .required('Поле обязательное для заполнения'),
          password: Yup.string()
            .min(6, 'Пароль должен состоять минимум из 6 символов')
            .required('Поле обязательное для заполнения'),
          name: Yup.string()
            .required('Поле обязательное для заполнения'),
          surname: Yup.string()
            .required('Поле обязательное для заполнения'),
        })}>
        <Form data-testid="signup-form">
          <FormikInput 
            margin="normal"
            label="Адрес электронной почты"
            type="email"
            name="email"
            fullWidth
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormikInput
                margin="normal"
                label="Имя"
                name="name"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <FormikInput
                fullWidth
                margin="normal"
                label="Фамилия"
                name="surname"
              />
            </Grid>
          </Grid>
          <FormikInput
            fullWidth
            margin="normal"
            label="Пароль"
            type="password"
            name="password"
            errorMessage={signUpError}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit">Зарегистрироваться</Button>
          </Box>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default withAuthLayout(SignUp);

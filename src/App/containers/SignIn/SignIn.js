import React, { Component } from 'react';
import { Typography, Box, Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { signInRequest } from '../AuthPage/store';
import AuthPage from '../AuthPage';
import TextInput from '../../components/TextInput';
import { getSignIn } from '../AuthPage/store';

const mapStateToProps = state => ({
  signIn: getSignIn(state),
});

class SignIn extends Component {
  handleSubmit = values => {
    this.props.signInRequest(values);
  }

  render() {
    const { signIn: { error } } = this.props;

    return (
      <AuthPage>
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
          onSubmit={this.handleSignInSubmit}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Введите корректный email')
              .required('Поле обязательное для заполнения'),
            password: Yup.string()
              .min(6, 'Пароль должен состоять минимум из 6 символов')
              .required('Поле обязательное для заполнения'),
          })}>
          <Form data-testid="signin-form">
            <TextInput
              name="email"
              margin="normal"
              label="Email"
              fullWidth
              errorMessage={error}
            />
            <TextInput
              name="password"
              margin="normal"
              label="Пароль"
              type="password"
              fullWidth
              errorMessage={error}
            />
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button variant="contained" type="submit">Войти</Button>
            </Box>
          </Form>
        </Formik>
      </AuthPage>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signInRequest })(SignIn);

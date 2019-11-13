import React, { Component } from 'react';
import { Typography, Box, Grid, Button, Link } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getSignUp, signUpRequest, initSignUp } from '../AuthPage/store';
import AuthPage from '../AuthPage';
import TextInput from '../../components/TextInput';

const mapStateToProps = state => ({
  signUp: getSignUp(state),
});

class SignUp extends Component {
  componentDidMount() {
    this.props.initSignUp();
  }

  componentDidUpdate() {
    const { signUp: { submitted }, history } = this.props;
    
    if (submitted) {
      history.push('/signin');
    }
  }

  handleSubmit = values => {
    this.props.signUpRequest(values);
  }

  render() {
    const { signUp: { error } } = this.props;

    return (
      <AuthPage>
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
          onSubmit={this.handleSubmit}
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
            <TextInput 
              margin="normal"
              label="Адрес электронной почты"
              type="email"
              name="email"
              fullWidth
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextInput
                  margin="normal"
                  label="Имя"
                  name="name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextInput
                  fullWidth
                  margin="normal"
                  label="Фамилия"
                  name="surname"
                />
              </Grid>
            </Grid>
            <TextInput
              fullWidth
              margin="normal"
              label="Пароль"
              type="password"
              name="password"
              errorMessage={error}
            />
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button variant="contained" type="submit">Зарегистрироваться</Button>
            </Box>
          </Form>
        </Formik>
      </AuthPage>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
    token: PropTypes.string,
  }).isRequired,
  history: PropTypes.object.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signUpRequest, initSignUp })(SignUp);

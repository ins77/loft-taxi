import React, { Component } from 'react';
import { Typography, Box, TextField, Grid, Button, Link } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getSignUp, signUpRequest } from '../../redux/signUp';
import { createSignUpData } from '../../redux/signUpForm';
import AuthPage from '../AuthPage';

const mapStateToProps = state => ({
  signUp: getSignUp(state),
});

class SignUp extends Component {
  state = {
    email: '',
    name: '',
    surname: '',
    password: '',
  }

  componentDidUpdate(prevProps) {
    const { signUp: { token }, history } = this.props;

    if (token && token !== prevProps.signUp.token) {
      history.push('/signin');
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  onSignUpSubmit = event => {
    event.preventDefault();

    const { createSignUpData, signUpRequest } = this.props;

    createSignUpData({ ...this.state });
    signUpRequest();
  }

  render() {
    const { signUp: { isLoading } } = this.props;
    const { email, name, surname, password } = this.state;

    return (
      <AuthPage>
        <Typography variant="h5" component="h3">Регистрация</Typography>
        <Box mt={1}>
          <Typography variant="body1">
            {'Уже зарегистрирован? '}
              <Link component={RouterLink} to="/signin">
                Войти
              </Link>
          </Typography>
        </Box>
        <form noValidate onSubmit={this.onSignUpSubmit} data-testid="signup-form">
          <TextField 
            fullWidth
            error
            margin="normal"
            label="Адрес электронной почты"
            required
            helperText="Ошибка"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                error
                margin="normal"
                label="Имя"
                required
                helperText="Ошибка"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                error
                margin="normal"
                label="Фамилия"
                required
                helperText="Ошибка"
                name="surname"
                value={surname}
                onChange={this.handleInputChange}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            error
            margin="normal"
            label="Пароль"
            required
            helperText="Ошибка"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Box mt={3} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" disabled={isLoading}>Зарегистрироваться</Button>
          </Box>
        </form>
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
  createSignUpData: PropTypes.func.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signUpRequest, createSignUpData })(SignUp);

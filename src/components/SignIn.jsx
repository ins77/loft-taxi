import React from 'react';
import { Typography, Box, Link, TextField, Button } from '@material-ui/core';

import AuthFormWrapper from './AuthFormWrapper';

const SignIn = ({ onSignInSubmit, onChangeToSignUp }) => (
  <AuthFormWrapper>
    <Typography variant="h5" component="h3">Войти</Typography>
    <Box mt={1}>
      <Typography variant="body1">
        Новый пользователь? <Link href="#" onClick={onChangeToSignUp}>Зарегистрируйтесь</Link>
      </Typography>
    </Box>
    <form noValidate onSubmit={onSignInSubmit}>
      <TextField fullWidth error margin="normal" label="Имя пользователя" required helperText="Ошибка" />
      <TextField fullWidth error margin="normal" label="Пароль" required helperText="Ошибка" type="password" />
      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" type="submit">Войти</Button>
      </Box>
    </form>
  </AuthFormWrapper>
);

export default SignIn;

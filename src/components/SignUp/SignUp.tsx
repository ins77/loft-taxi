import React from 'react';
import { Typography, Box, Link, TextField, Grid, Button } from '@material-ui/core';

import AuthFormWrapper from '../AuthFormWrapper';

interface SignUpProps {
  onChangeToSignIn(event: React.SyntheticEvent): void;
  onSignUpSubmit(event: React.SyntheticEvent): void;
};

const SignUp: React.FC<SignUpProps> = ({ onChangeToSignIn, onSignUpSubmit }) => (
  <AuthFormWrapper>
    <Typography variant="h5" component="h3">Регистрация</Typography>
    <Box mt={1}>
      <Typography variant="body1">
        Уже зарегистрирован? <Link href="#" onClick={onChangeToSignIn}>Войти</Link>
      </Typography>
    </Box>
    <form noValidate onSubmit={onSignUpSubmit}>
      <TextField fullWidth error margin="normal" label="Адрес электронной почты" required helperText="Ошибка" type="email" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth error margin="normal" label="Имя" required helperText="Ошибка" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth error margin="normal" label="Фамилия" required helperText="Ошибка" />
        </Grid>
      </Grid>
      <TextField fullWidth error margin="normal" label="Пароль" required helperText="Ошибка" type="password" />
      <Box mt={3} display="flex" justifyContent="flex-end">
        <Button variant="contained" type="submit">Зарегистрироваться</Button>
      </Box>
    </form>
  </AuthFormWrapper>
);

export default SignUp;

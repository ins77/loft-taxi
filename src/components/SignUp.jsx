import React from 'react';
import { Typography, Box, Link, TextField, Grid } from '@material-ui/core';

import AuthFormWrapper from './AuthFormWrapper';
import Button from './Button';

const SignUp = () => {
  return (
    <AuthFormWrapper>
      <Typography variant="h5" component="h3">Регистрация</Typography>
      <Box mt={1}>
        <Typography variant="body1">
          Уже зарегистрирован? <Link href="#">Войти</Link>
        </Typography>
      </Box>
      <form noValidate onSubmit={null}>
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
};

export default SignUp;

import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../../components/Logo';
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper';
// interface AuthPageProps {
//   classes: {
//     wrap: string;
//     grid: string;
//   };
// };

const styles = {
  grid: {
    height: '100%',
  },
};

const AuthPage = ({ classes, children }) => (
  <Box display="flex" height="100%">
    <Container maxWidth="md">
      <Grid container className={classes.grid} alignItems="center">
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
            <Logo variant="light" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <AuthFormWrapper>
            {children}
          </AuthFormWrapper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default withStyles(styles)(AuthPage);

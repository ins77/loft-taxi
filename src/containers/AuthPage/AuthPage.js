import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';
import AuthFormWrapper from '../../components/AuthFormWrapper/AuthFormWrapper';

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

AuthPage.propTypes = {
  classes: PropTypes.shape({
    grid: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default withStyles(styles)(AuthPage);

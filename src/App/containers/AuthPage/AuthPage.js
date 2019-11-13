import React from 'react';
import { Container, Grid, Box, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';

const styles = {
  grid: {
    height: '100%',
  },
};

const AuthPage = ({ classes, children, auth }) => {
  return (
    <Box display="flex" height="100%">
      <Container maxWidth="md">
        <Grid container className={classes.grid} alignItems="center">
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center">
              <Logo variant="light" />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Box px={4} py={5} position="relative">
                {children}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

AuthPage.propTypes = {
  classes: PropTypes.shape({
    grid: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default withStyles(styles)(AuthPage);

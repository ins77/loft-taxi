import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from '@material-ui/core';

const AuthFormWrapper = ({ children }) => (
  <Paper>
    <Box px={4} py={5}>
      {children}
    </Box>
  </Paper>
);

AuthFormWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default AuthFormWrapper;

import React from 'react';
import { Paper, Box } from '@material-ui/core';

const PaperBox = ({ children, width, ...restProps }) => (
  <Box position="relative" px={3} py={5} display="inline-flex" justifyContent="center" flexDirection="column" width={width}>
    <Paper>
      <Box px={6} py={6} position="relative" {...restProps}>
        {children}
      </Box>
    </Paper>
  </Box>
);

export default PaperBox;

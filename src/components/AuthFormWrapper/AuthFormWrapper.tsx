import React from 'react';
import { Box, Paper } from '@material-ui/core';

const AuthFormWrapper: React.FC = ({ children }) => <Paper><Box px={4} py={5}>{children}</Box></Paper>;

export default AuthFormWrapper;
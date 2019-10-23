import React from 'react';
import { default as MaterialButton } from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CustomButton = withStyles({
  root: {
    minWidth: 160,
    padding: '17px 30px',
    textTransform: 'none',
    fontSize: 21,
    fontWeight: 400,
    lineHeight: 1,
    boxShadow: 'none',
    backgroundColor: '#ffc617',
    '&:hover': {
      backgroundColor: '#f0b401',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#dba709',
    },
  },
})(MaterialButton);

const Button = ({ children, ...restProps }) => {
  return (
    <CustomButton {...restProps}>{children}</CustomButton>
  );
};

export default Button;

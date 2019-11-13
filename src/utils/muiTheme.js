import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        minWidth: 160,
        padding: '17px 30px',
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
      label: {
        textTransform: 'none',
      }
    },
    MuiToolbar: {
      root: {
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.11)',
        backgroundColor: '#fff',
      },
    },
    MuiLink: {
      root: {
        color: '#1473e6',
      },
    },
  },
});

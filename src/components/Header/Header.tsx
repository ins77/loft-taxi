import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../Logo';

interface HeaderProps {
  onChangePage(event: React.SyntheticEvent, route: string): void; 
};

interface NavLinks {
  id: number;
  label: string;
  route: string;
};

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const navLinks: NavLinks[] = [
  { id: 0, label: 'Карта', route: 'map' },
  { id: 1, label: 'Профиль', route: 'profile' },
  { id: 2, label: 'Выйти', route: 'signOut' },
];

const Header: React.FC<HeaderProps> = ({ onChangePage }) => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Logo />
        <Box ml="auto">
          {navLinks.map(({ id, label, route }) => (
            <Button key={id} className={classes.button} onClick={(event) => onChangePage(event, route)}>
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


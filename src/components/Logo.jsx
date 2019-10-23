import React from 'react';

import logo from '../assets/images/logo.png';
import logoLight from '../assets/images/logo-light.png';

const Logo = ({ variant }) => <img src={variant === 'light' ? logoLight : logo} alt="Loft Taxi" />;

export default Logo;

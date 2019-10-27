import React from 'react';

import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';

interface LogoProps {
  variant?: string;
};

const Logo: React.FC<LogoProps> = ({ variant }) => (
  <img src={variant === 'light' ? logoLight : logo} alt="Loft Taxi" />
);

export default Logo;

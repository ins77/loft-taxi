import React from 'react';

import logo from '../../assets/images/logo.png';
import logoLight from '../../assets/images/logo-light.png';

// interface LogoProps {
//   variant?: string;
// };

const Logo = ({ variant }) => (
  <img src={variant === 'light' ? logoLight : logo} 
       alt="loft-taxi-logo" />
);

export default Logo;

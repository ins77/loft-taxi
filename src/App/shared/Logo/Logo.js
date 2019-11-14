import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../core/assets/images/logo.png';
import logoLight from '../../../core/assets/images/logo-light.png';

const Logo = ({ variant }) => (
  <img src={variant === 'light' ? logoLight : logo} 
       alt="loft-taxi-logo" />
);

Logo.propTypes = {
  variant: PropTypes.string,
};


export default Logo;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import { logout } from '../../redux/signIn';

const withLayout = WrappedComponent => {
  class LayoutHOC extends Component {
    onLogout = event => {
      event.preventDefault();

      const { logout } = this.props
    
      logout();
      localStorage.removeItem('token');
    }
  
    render() {
      return (
        <div data-testid="layout">
          <Header onLogout={this.onLogout} />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  }

  LayoutHOC.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  return connect(null, { logout })(LayoutHOC)
}



export default withLayout;
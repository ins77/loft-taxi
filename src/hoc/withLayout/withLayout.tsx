import React, { Component } from 'react';

import Header from '../../components/Header';
import { AuthContext } from '../../components/AuthContext';

const withLayout = (WrappedComponent: React.ComponentType): React.ComponentType => {
  return class LayoutHOC extends Component {
    static contextType = AuthContext;
  
    onLogout = (event: React.SyntheticEvent) => {
      event.preventDefault();
    
      this.context.logout();
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
}

export default withLayout;

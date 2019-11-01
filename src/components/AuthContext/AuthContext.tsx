import React, { Component } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  login?: () => void;
  logout?: () => void;
}

const AuthContext = React.createContext<IAuthContext>({ isAuthenticated: false });

interface AuthContextState {
  isAuthenticated: boolean;
}
 
class AuthProvider extends Component<{}, AuthContextState> {
  state: AuthContextState = { isAuthenticated: false };

  login = () => {
    this.setState({ isAuthenticated: true });
  }

  logout = () => {
    this.setState({ isAuthenticated: false });
  }

  render() {
    const { isAuthenticated } = this.state;
    const initialValue = {
      isAuthenticated,
      login: this.login,
      logout: this.logout,
    };

    return (
      <AuthContext.Provider value={initialValue}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
 
export { AuthProvider, AuthContext };

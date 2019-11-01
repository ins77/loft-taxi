import React, { Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AuthProvider, AuthContext } from './AuthContext';

const getAuthProvideMock = () => (
  <AuthProvider>
    <AuthContext.Consumer>
      {({ isAuthenticated, login, logout }) => (
        <Fragment>
          <button type="button" data-testid="login" onClick={login}></button>
          <button type="button" data-testid="logout" onClick={logout}></button>
          <div data-testid="auth-context-child">
            isAuthenticated: {String(isAuthenticated)}
          </div>
        </Fragment>
      )}
    </AuthContext.Consumer>
  </AuthProvider>
);

describe('AuthContext', () => {
  it('свойство контекста isAuthenticated инициализировано значением false', () => {
    const { getByTestId } = render(getAuthProvideMock());

    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isAuthenticated: false');
  });

  it('при вызове метода контекста login - isAuthenticated становится true', () => {
    const { getByTestId } = render(getAuthProvideMock());

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isAuthenticated: true');
  });

  it('при вызове метода контекста logout - isAuthenticated становится false', () => {
    const { getByTestId } = render(getAuthProvideMock());

    fireEvent.click(getByTestId('login'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isAuthenticated: true');

    fireEvent.click(getByTestId('logout'));
    expect(getByTestId('auth-context-child').textContent)
      .toEqual('isAuthenticated: false');
  });
});

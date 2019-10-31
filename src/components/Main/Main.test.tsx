import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { AuthProvider } from '../AuthContext';
import Main from '../Main';

describe('AuthPage', () => {
  it('при сабмите формы signIn происходит login', () => {
    const { queryByTestId, getByTestId } = render(<AuthProvider><Main /></AuthProvider>);

    expect(queryByTestId('layout')).toBeFalsy();
    expect(queryByTestId('signin-form')).toBeTruthy();
    fireEvent.submit(getByTestId('signin-form'));
    expect(queryByTestId('layout')).toBeTruthy();
    expect(queryByTestId('signup-form')).toBeFalsy();
    expect(queryByTestId('signin-form')).toBeFalsy();
  });

  it('при сабмите формы signUp происходит login', () => {
    const { queryByTestId, getByTestId } = render(<AuthProvider><Main /></AuthProvider>);

    fireEvent.click(getByTestId('button-to-signup'));
    expect(queryByTestId('layout')).toBeFalsy();
    expect(queryByTestId('signup-form')).toBeTruthy();

    fireEvent.submit(getByTestId('signup-form'));
    expect(queryByTestId('layout')).toBeTruthy();
    expect(queryByTestId('signup-form')).toBeFalsy();
    expect(queryByTestId('signin-form')).toBeFalsy();
  });
});
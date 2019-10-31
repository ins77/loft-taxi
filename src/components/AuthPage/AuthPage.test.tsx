import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AuthPage from './AuthPage';
import { AuthProvider, AuthContext } from '../AuthContext';
import Main from '../Main/Main';

describe('AuthPage', () => {
  it('при инициализации отображается SignIn', () => {
    const { queryByTestId } = render(<AuthPage />);

    expect(queryByTestId('signin-form')).toBeTruthy();
  });

  it('при инициализации не отображается SignUp', () => {
    const { queryByTestId } = render(<AuthPage />);

    expect(queryByTestId('signup-form')).toBeFalsy();
  });

  it('при клике по кнопке смены на signup, переключает блок signin на signup', () => {
    const { getByTestId, queryByTestId } = render(<AuthPage />);

    expect(queryByTestId('signin-form')).toBeTruthy();
    expect(queryByTestId('signup-form')).toBeFalsy();
    fireEvent.click(getByTestId('button-to-signup'));
    expect(queryByTestId('signup-form')).toBeTruthy();
    expect(queryByTestId('signin-form')).toBeFalsy();
  });

  it('при клике по кнопке смены на signin, переключает блок signup на signin', () => {
    const { getByTestId, queryByTestId } = render(<AuthPage />);
    
    expect(queryByTestId('signin-form')).toBeTruthy();
    expect(queryByTestId('signup-form')).toBeFalsy();
    fireEvent.click(getByTestId('button-to-signup'));
    expect(queryByTestId('signup-form')).toBeTruthy(); 
    expect(queryByTestId('signin-form')).toBeFalsy();
    fireEvent.click(getByTestId('button-to-signin'));
    expect(queryByTestId('signin-form')).toBeTruthy();
    expect(queryByTestId('signup-form')).toBeFalsy();
  });

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
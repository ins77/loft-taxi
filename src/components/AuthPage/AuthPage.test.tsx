import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AuthPage from './AuthPage';
import { AuthContext } from '../AuthContext';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => ({}),
}));

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
    const login = jest.fn(() => true);
    const { getByTestId } = render(
      <AuthContext.Provider value={{ isAuthenticated: true, login }}>
        <AuthPage />
      </AuthContext.Provider>
    );

    expect(login.mock.calls.length).toEqual(0);
    fireEvent.submit(getByTestId('signin-form'));
    expect(login.mock.results[0].value).toBe(true);
  });

  it('при сабмите формы signUp происходит login', () => {
    const login = jest.fn(() => true);
    const { getByTestId } = render(
      <AuthContext.Provider value={{ isAuthenticated: true, login }}>
        <AuthPage />
      </AuthContext.Provider>
    );

    fireEvent.click(getByTestId('button-to-signup'));
    expect(login.mock.calls.length).toEqual(0);
    fireEvent.submit(getByTestId('signup-form'));
    expect(login.mock.results[0].value).toBe(true);
  });
});
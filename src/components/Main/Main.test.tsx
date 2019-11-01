import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Main from '../Main';
import { navLinks } from '../Header/Header';
import { AuthProvider } from '../AuthContext';

describe('Main', () => {
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

  it('при клике в меню навигации на пункт Выйти, происходит logout', () => {
    const { queryByTestId, getByTestId } = render(<AuthProvider><Main /></AuthProvider>);
    const { route } = navLinks[2];

    fireEvent.submit(getByTestId('signin-form'));
    fireEvent.click(getByTestId(`button-${route}`));
    expect(queryByTestId('profile-page')).toBeFalsy();
    expect(queryByTestId('map-page')).toBeFalsy();
    expect(queryByTestId('signin-form')).toBeTruthy();
  });
});

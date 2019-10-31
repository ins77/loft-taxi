import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { navLinks } from '../../components/Header/Header';
import Layout from './Layout';

describe('Layout', () => {
  it('при инициализации открыта страница карты', () => {
    const { queryByTestId } = render(<Layout />);

    expect(queryByTestId('map-page')).toBeTruthy();
  });

  it('при клике в меню навигации на пункт Карта, переключает на страницу карты', () => {
    const { queryByTestId, getByTestId } = render(<Layout />);
    const { route: mapRoute } = navLinks[0];
    const { route: profileRoute } = navLinks[1];

    fireEvent.click(getByTestId(`button-${profileRoute}`));
    expect(queryByTestId('map-page')).toBeFalsy();

    fireEvent.click(getByTestId(`button-${mapRoute}`));
    expect(queryByTestId('map-page')).toBeTruthy();
  });

  it('при клике в меню навигации на пункт Профиль, переключает на страницу профиля', () => {
    const { queryByTestId, getByTestId } = render(<Layout />);
    const { route } = navLinks[1];

    fireEvent.click(getByTestId(`button-${route}`));
    expect(queryByTestId('profile-page')).toBeTruthy();
    expect(queryByTestId('map-page')).toBeFalsy();
  });
});

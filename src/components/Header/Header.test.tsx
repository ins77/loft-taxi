import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(<Header onChangePage={() => {}} />);

    expect(queryByTestId('header-app-bar')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(<ProfilePage  />);

    expect(queryByTestId('profile-page')).toBeTruthy();
  });
});

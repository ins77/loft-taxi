import React from 'react';
import { render } from '@testing-library/react';

import MapPage from './MapPage';

describe('MapPage', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(<MapPage  />);

    expect(queryByTestId('map-page')).toBeTruthy();
  });
});

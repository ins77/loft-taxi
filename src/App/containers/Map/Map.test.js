import React from 'react';
import { render } from '@testing-library/react';

import Map from './Map';

describe('Map', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(<Map  />);

    expect(queryByTestId('mapbox')).toBeTruthy();
  });
});

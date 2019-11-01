import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  it('компонент рендерится без ошибок', () => {
    const { queryByAltText } = render(<Logo />);

    expect(queryByAltText('loft-taxi-logo')).toBeTruthy();
  });

  it('отображается логотип для темного фона, если не переданы пропсы', () => {
    const { queryByAltText } = render(<Logo />);
    const imageSource = (queryByAltText('loft-taxi-logo') as HTMLImageElement).src;

    expect(imageSource).toMatch(/logo.png/);
  });

  it('отображается логотип для темного фона, если передан пропс variant со значением не light', () => {
    const { queryByAltText } = render(<Logo variant="lol" />);
    const imageSource = (queryByAltText('loft-taxi-logo') as HTMLImageElement).src;

    expect(imageSource).toMatch(/logo.png/);
  });

  it('отображается логотип для светлого фона, если передан пропс variant со значением light', () => {
    const { queryByAltText } = render(<Logo variant="light" />);
    const imageSource = (queryByAltText('loft-taxi-logo') as HTMLImageElement).src;

    expect(imageSource).toMatch(/logo-light.png/);
  });
});

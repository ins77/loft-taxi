import React from 'react';
import { render } from '@testing-library/react';

import SignIn from './SignIn';

describe('SignIn', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(
      <SignIn onChangeToSignUp={() => {}} onSignInSubmit={() => {}} />
    );

    expect(queryByTestId('signin-form')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import SignUp from './SignUp';

describe('SignUp', () => {
  it('Компонент рендерится без ошибок', () => {
    const { queryByTestId } = render(
      <SignUp onChangeToSignIn={() => {}} onSignUpSubmit={() => {}} />
    );

    expect(queryByTestId('signup-form')).toBeTruthy();
  });
});

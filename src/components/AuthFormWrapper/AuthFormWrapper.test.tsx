import React from 'react';
import { render } from '@testing-library/react';
import AuthFormWrapper from './AuthFormWrapper';

describe('AuthFormWrapper', () => {
  it('display children', () => {
    const { queryByTestId } = render(
      <AuthFormWrapper>
        <div data-testid="children" />
      </AuthFormWrapper>
    );

    expect(queryByTestId('children')).toBeTruthy();
  });
});
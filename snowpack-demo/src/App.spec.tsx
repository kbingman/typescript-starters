import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('it should work', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('timer')).toBeInTheDocument();
  });
});

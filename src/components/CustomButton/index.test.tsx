import React from 'react';
import { render } from '@testing-library/react';
import CustomButton from '.';

test('renders learn react link', () => {
  const { getByText } = render(<CustomButton />);
  const linkElement = getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});

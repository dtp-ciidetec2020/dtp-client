import React from 'react';
import { render } from '@testing-library/react';
import TestRemove from '.';

test('renders learn react link', () => {
  const { getByText } = render(<TestRemove />);
  const linkElement = getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
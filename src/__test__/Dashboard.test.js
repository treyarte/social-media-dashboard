import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

it('Renders without crashing', () => {
  render(<Dashboard />);
});

it('Matches the snapshot', () => {
  const { asFragment } = render(<Dashboard />);
  expect(asFragment()).toMatchSnapshot();
});

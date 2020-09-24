import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

it('Render match Snapshot', () => {
  const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>);
  expect(asFragment()).toMatchSnapshot();
});
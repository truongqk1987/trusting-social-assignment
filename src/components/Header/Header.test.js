import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

it('Render match Snapshot', () => {
    const { asFragment } = render(<MemoryRouter><Header /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
});
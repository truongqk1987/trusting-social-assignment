import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

it('Render match Snapshot', () => {
    const { asFragment } = render(<HomePage />);
    expect(asFragment()).toMatchSnapshot();
});
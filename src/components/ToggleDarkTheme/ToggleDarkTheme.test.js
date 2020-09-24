import React from 'react';
import { render } from '@testing-library/react';

import ToggleDarkTheme from './ToggleDarkTheme';

it('Render match Snapshot', () => {
    const { asFragment } = render(<ToggleDarkTheme />);
    expect(asFragment()).toMatchSnapshot();
});
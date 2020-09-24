import React from 'react';
import { render } from '@testing-library/react';

import Autocomplete from './Autocomplete';

it('Render match Snapshot', () => {
    const { asFragment } = render(<Autocomplete />);
    expect(asFragment()).toMatchSnapshot();
});
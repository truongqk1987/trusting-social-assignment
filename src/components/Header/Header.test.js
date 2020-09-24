import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme';

import Header from './Header';

it('Render match Snapshot', () => {
    const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
});
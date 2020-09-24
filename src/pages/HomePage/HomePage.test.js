import React from 'react';
import { shallow, mount } from 'enzyme';

import HomePage from './HomePage';

it('Render match Snapshot', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
});

it('Mount Home page successfully', () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper).not.toBeNull();
});
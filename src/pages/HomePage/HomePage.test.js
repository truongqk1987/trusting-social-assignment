import React from 'react';
import { shallow } from 'enzyme';

import HomePage from './HomePage';

it('Render match Snapshot', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import { shallow } from 'enzyme';

import Autocomplete from './Autocomplete';

it('Render match Snapshot', () => {
    const wrapper = shallow(<Autocomplete />);
    expect(wrapper).toMatchSnapshot();
});
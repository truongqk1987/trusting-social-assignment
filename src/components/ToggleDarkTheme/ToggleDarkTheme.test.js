import React from 'react';
import { shallow } from 'enzyme';

import ToggleDarkTheme from './ToggleDarkTheme';

it('Render match Snapshot', () => {
    const wrapper = shallow(<ToggleDarkTheme />);
    expect(wrapper).toMatchSnapshot();
});
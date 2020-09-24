import React from 'react';
import { mount, shallow } from 'enzyme';

import ToggleDarkTheme from './ToggleDarkTheme';

it('Render match Snapshot', () => {
    const wrapper = shallow(<ToggleDarkTheme />);
    expect(wrapper).toMatchSnapshot();
});

it('Toggle button successfully', () => {
    const clickFn = jest.fn();
    const wrapper = mount(<ToggleDarkTheme onDarkThemeChanged={clickFn} />);
    wrapper.simulate('click');
    expect(clickFn).toHaveBeenCalled();
});
import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme';

import Header from './Header';

it('Render match Snapshot', () => {
    const wrapper = shallow(<MemoryRouter><Header /></MemoryRouter>);
    expect(wrapper).toMatchSnapshot();
});

it('Toggle button successfully', () => {
    const onThemeChange = jest.fn();
    const wrapper = mount(<MemoryRouter><Header onDarkThemeChanged={onThemeChange} /></MemoryRouter>);
    wrapper.find('a.toggle-dark-theme svg').first().simulate('click');
    expect(onThemeChange).toHaveBeenCalled();
});
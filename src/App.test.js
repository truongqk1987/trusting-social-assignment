import React from 'react';
import { shallow, mount } from 'enzyme';

import App, { Backdrop } from './App';

it('Render match Snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('Render Backdrop match Snapshot', () => {
    const wrapper = shallow(<Backdrop />);
    expect(wrapper).toMatchSnapshot();
});

// it('Mount App successfully', () => {
//     const wrapper = mount(<App />);
//     expect(wrapper).toMatchSnapshot();
// });
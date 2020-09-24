import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';

import App from './App';

it('Render match Snapshot', () => {
  const wrapper = shallow(<MemoryRouter><App /></MemoryRouter>);
  expect(wrapper).toMatchSnapshot();
});
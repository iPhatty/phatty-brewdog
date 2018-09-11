import React from 'react';
import { mount } from 'enzyme';

import SearchBox from '../searchBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(<SearchBox />);
});

it('renders a form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('renders a semantic-ui input', () => {
  expect(wrapped.find('input').length).toEqual(1);
});

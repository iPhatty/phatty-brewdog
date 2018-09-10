import React from 'react';
import { mount } from 'enzyme';

import SearchBox from '../searchBox';
import { Input } from 'semantic-ui-react';

let wrapped;
beforeEach(() => {
  wrapped = mount(<SearchBox />);
});

it('renders a form', () => {
  expect(wrapped.find('form').length).toEqual(1);
});

it('renders a semantic-ui input', () => {
  expect(wrapped.find(Input).length).toEqual(1);
});

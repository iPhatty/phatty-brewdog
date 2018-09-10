import React from 'react';
import { mount } from 'enzyme';

import App from '../app';
import SearchBox from '../searchBox';
import Results from '../results';

let wrapped;
beforeEach(() => {
  wrapped = mount(<App />);
});

test('jest is working', () => {
  expect(1).toBe(1);
});

it('renders an app component', () => {
  // There is one App component
  expect(wrapped.find(App).length).toEqual(1);
});

it('renders a searchbox component', () => {
  expect(wrapped.find(SearchBox).length).toEqual(1);
});

it('renders a results component', () => {
  expect(wrapped.find(Results).length).toEqual(1);
});

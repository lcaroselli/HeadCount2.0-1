import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {shallow, mount} from 'enzym';

describe('App tests', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

})

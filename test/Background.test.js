import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../src/Background';
import { shallow, mount } from 'enzyme';

describe('Background', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Background />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render 1 container div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('should render 1 section', () => {
    expect(wrapper.find('section').length).toEqual(1);
  })

  it('should render a background image', () => {
    expect(wrapper.find('img').length).toEqual(1);
  })
})

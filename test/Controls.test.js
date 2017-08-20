import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../src/Controls';
import { shallow, mount } from 'enzyme';

describe('Controls', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Controls />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render five sections', () => {
    expect(wrapper.find('section').length).toEqual(5);
  })

  it('should render four divs', () => {
    expect(wrapper.find('div').length).toEqual(4);
  })

  it('should render a logo', () => {
    expect(wrapper.find('img').length).toEqual(1);
  })

  it('should render an h1 title', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  })

  it('should render a search input', () => {
    expect(wrapper.find('.search-input').length).toEqual(1);
  })

  it('should render a reset button', () => {
    expect(wrapper.find('.reset-btn').length).toEqual(1);
  })

})

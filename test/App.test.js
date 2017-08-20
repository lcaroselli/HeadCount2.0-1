import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  const cardSelected = jest.fn();


  beforeEach( () => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the Background, Controls, and CardDisplay components', () => {
    expect(wrapper.find('Background').length).toEqual(1);
    expect(wrapper.find('Controls').length).toEqual(1);
    expect(wrapper.find('CardDisplay').length).toEqual(1);
    })

  it('should have an initial state of cards set to an array of 181 objects', () => {
    expect(wrapper.state().cards.length).toEqual(181);
  })

  it('should have an initial click state set to false', () => {
    expect(wrapper.state().clicked).toEqual(false);
  })

  it('should be able to display just the matching cards that we search for', () => {
    wrapper = mount(<App />);
    const searchInput = wrapper.find('.search-input');
    searchInput.simulate('change', {target: { value: 'colorado'}});
    expect(wrapper.state().cards.length).toEqual(2);
  })

  it.skip('TEST STATE CHANGE', () => {
    
  })
})

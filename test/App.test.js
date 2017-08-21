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

  it('should have an initial state of cards set to an empty array', () => {
    expect(wrapper.state().cards.length).toEqual(0);
  })

  it('should have an initial cardCount of 0', () => {
    expect(wrapper.state().cardCount).toEqual(0);
  })

  it('should have an initial comparedDisplay state set to false', () => {
    expect(wrapper.state().comparedDisplay).toEqual(false);
  })

  it('should have an initial comparedResult state set to null', () => {
    expect(wrapper.state().comparedResult).toEqual(null);
  })

  it('should have an initial input state set to an empty string', () => {
    expect(wrapper.state().input).toEqual('');
  })

  it('should have an initial selectedCards state set to an empty array', () => {
    expect(wrapper.state().selectedCards).toEqual([]);
  })

  it('componentDidMount changes the state of the cards array to equal 181 objects', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state().cards.length).toEqual(181);
  })

  it('should be able to display just the matching cards that we search for', () => {
    wrapper = mount(<App />);
    const searchInput = wrapper.find('.search-input');
    searchInput.simulate('change', {target: { value: 'colorado'}});
    expect(wrapper.state().cards.length).toEqual(2);
  })

  it('should only render CompareDisplay when prop comparedDisplay is true and the selectedCards array has a length of 2', () => {
    expect(wrapper.state().comparedDisplay).toEqual(false);
    expect(wrapper.state().selectedCards.length).toEqual(0);

    const mockData = [
      { location: 'COLORADO', yearData: { 2004: 0.35 } },
      { location: 'ARAPAHOE', yearData: { 2004: 0.48 } }
    ]

    wrapper.setState({
      selectedCards: mockData,
      comparedDisplay: true
    })

    expect(wrapper.state().comparedDisplay).toEqual(true);
    expect(wrapper.state().selectedCards.length).toEqual(2)
  })

})

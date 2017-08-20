import React from 'react';
import ReactDOM from 'react-dom';
import Controls from '../src/Controls';
import { shallow, mount } from 'enzyme';

describe('Controls', () => {
  let wrapper;
  let mountWrapper;
  const handleChangeFn = jest.fn();
  const resetSearchFn = jest.fn();

  beforeEach( () => {
    wrapper = shallow(<Controls
                        handleChange = { handleChangeFn }
                        resetSearch = { resetSearchFn } />);
    mountWrapper = mount(<Controls
                        handleChange = { handleChangeFn }
                        resetSearch = { resetSearchFn } />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a function for the handleChange property', () => {
    expect(mountWrapper.props().handleChange).toEqual(handleChangeFn);
  })

  it('should have a function for the resetSearch property', () => {
    expect(mountWrapper.props().resetSearch).toEqual(resetSearchFn);
  })

  it('should reset the input field to an empty string when the reset button is clicked', () => {
    const resetButton = wrapper.find('.reset-btn');

    resetButton.simulate('click');

    expect(resetSearchFn).toHaveBeenCalled();
    expect(resetSearchFn).toHaveBeenCalledTimes(1);

    resetButton.simulate('click');
    expect(resetSearchFn).toHaveBeenCalledTimes(2);
  })

  it('should handle a change in the input field', () => {
    const inputField = wrapper.find('.search-input');

    inputField.simulate('change');

    expect(handleChangeFn).toHaveBeenCalled();
    expect(handleChangeFn).toHaveBeenCalledTimes(1);

    inputField.simulate('change');
    expect(handleChangeFn).toHaveBeenCalledTimes(2);
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

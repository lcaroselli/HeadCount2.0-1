import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../src/Card';
import CardDisplay from '../src/CardDisplay';
import { shallow, mount } from 'enzyme';
import MockData from './test-helpers/MockData';

describe('Card', () => {
  let wrapper;
  const mockObject = MockData[0];

  beforeEach( () => {
    wrapper = shallow(<Card
                        key={ mockObject.location }
                        location={ mockObject.location }
                        yearData={ mockObject.data } />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a containing div with 3 sections', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('section').length).toEqual(3);
  })

})

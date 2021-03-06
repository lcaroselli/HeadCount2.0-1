import React from 'react';
import ReactDOM from 'react-dom';
import CardDisplay from '../src/CardDisplay';
import Card from '../src/Card';
import { shallow, mount } from 'enzyme';
import MockData from './test-helpers/MockData';

describe('CardDisplay', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<CardDisplay
                        cardInfo={ MockData }/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render 2 divs and 2 sections', () => {
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('section').length).toEqual(2);
  })

})

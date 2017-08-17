import React, { Component } from 'react';
import CardDisplay from './CardDisplay.js';
import Controls from './Controls.js';
import DistrictRepository from './helper.js';
import Background from './Background.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'

const districtData = new DistrictRepository(kinderData);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: districtData.findAllMatches(),
    };
  }

  handleChange(e) {
    this.setState({
      cards: districtData.findAllMatches(e.target.value)
    });
  }


  render() {


    return (
      <div>

        <Background />
        <Controls
          handleChange = { this.handleChange.bind(this) } />
        <CardDisplay
          cardInfo={ this.state.cards } />

      </div>
    );
  }
}

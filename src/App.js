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
      clicked: false
    };
  }

  handleChange(e) {
    this.setState({
      cards: districtData.findAllMatches(e.target.value)
    });
  }

  reset() {
    this.setState({
      cards: districtData.findAllMatches()
    });
  }

  resetSearch() {
    let userInput = document.querySelector('.search-input');
    userInput.value = '';
    this.reset();
  }

  cardSelected(e) {
    console.log(e.currentTarget.className)
    if(this.state.clicked === false) {
      e.currentTarget.className = 'cardSelected'
      this.setState=({
        clicked: true
      })
      console.log(this.state.clicked)
    }

    if(this.state.clicked === true) {
      e.currentTarget.className = 'card'
      this.setState=({
        clicked: false
      })
    }

  }

  render() {


    return (
      <div>

        <Background />
        <Controls
          handleChange = { this.handleChange.bind(this) }
          reset = { this.reset.bind(this) }
          resetSearch = { this.resetSearch.bind(this) }/>
        <CardDisplay
          cardInfo={ this.state.cards }
          cardSelected={this.cardSelected.bind(this)}/>

      </div>
    );
  }
}

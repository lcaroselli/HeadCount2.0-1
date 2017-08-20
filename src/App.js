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
      selectedCards: [],
      cardCount: 0
    };
  }

  handleChange(e) {
    this.setState({
      cards: districtData.findAllMatches(e.target.value)
    });
  }

  resetCards() {
    this.setState({
      cards: districtData.findAllMatches()
    });
  }

  resetSearch() {
    let userInput = document.querySelector('.search-input');
    userInput.value = '';
    this.resetCards();
  }

  cardSelected(location, e) {
    if(this.state.selectedCards.length <= 1) {
      this.checkCard(location);
      this.setState({
        cardCount: 1
      })
    }
  }

  checkCard(location, e) {
    const selectedCardIndex = this.state.cards.map(district => district.location).indexOf(location);
    if(this.state.cards[selectedCardIndex].selected === false) {
      this.state.selectedCards.push(location)
      this.state.cards[selectedCardIndex].selected = true
    }
    else if(this.state.cards[selectedCardIndex].selected === true) {
      const removeCard = this.state.selectedCards.find((district, index) => {
        if (district === location) {
        }
      })
      this.state.selectedCards.splice(removeCard, 1);
      this.state.cards[selectedCardIndex].selected = false
    }
    console.log('selected cards array ', this.state.selectedCards)
    console.log('selected card status ', this.state.cards[selectedCardIndex].selected)
  }



  render() {


    return (
      <div>

        <Background />
        <Controls
          handleChange = { this.handleChange.bind(this) }
          resetCards = { this.resetCards.bind(this) }
          resetSearch = { this.resetSearch.bind(this) }/>
        <CardDisplay
          cardInfo={ this.state.cards }
          cardSelected={this.cardSelected.bind(this)}/>

      </div>
    );
  }
}

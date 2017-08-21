import React, { Component } from 'react';
import Background from './Background';
import CardDisplay from './CardDisplay';
import CompareDisplay from './CompareDisplay';
import Controls from './Controls';
import DistrictRepository from './helper';
import kinderData from '../data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types'
const districtData = new DistrictRepository(kinderData);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardCount: 0,
      comparedDisplay: false,
      comparedResult: null,
      input: '',
      selectedCards: []
    };
  }

  cardSelected(location, e) {
    if(this.state.selectedCards.length <= 1) {
      this.checkCard(location);
      this.setState({
        cardCount: 1
      });
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
    this.setComparison();
  }

  cleanCards() {
    const cleanCards = this.state.cards.map(district => district.location).indexOf(this.state.selectedCards[0], this.state.selectedCards[1]);
    this.state.cards[cleanCards].selected = false;
  }

  componentDidMount() {
    this.setState({
      cards: districtData.findAllMatches()
    });
  }

  handleChange(e) {
    this.setState({
      cards: districtData.findAllMatches(e.target.value),
      input: e.target.value
    });
  }

  hideComparison() {
    this.cleanCards();
    this.setState({
      comparedDisplay: false,
      selectedCards: []
    });
    this.resetCards();
  }

  resetCards() {
    this.setState({
      cards: districtData.findAllMatches(),
      input: ''
    });
  }

  setComparison() {
    if(this.state.selectedCards.length >= 2){
      let location1 = this.state.selectedCards[0];
      let location2 = this.state.selectedCards[1];
      let comparedAverageObj = districtData.compareDistrictAverages(location1, location2);
      this.setState({
        comparedResult: comparedAverageObj,
        comparedDisplay: true
      })
    }
  }

  render() {
    return (
      <div>

        <Background />

        <Controls
          handleChange = { this.handleChange.bind(this) }
          resetCards = { this.resetCards.bind(this) }
          value = { this.state.input } />

        <CardDisplay
          cardInfo = { this.state.cards }
          cardSelected = { this.cardSelected.bind(this) } />

        { this.state.comparedDisplay &&
          <CompareDisplay
            comparisonInfo =  { this.state.comparedResult }
            hideComparison = { this.hideComparison.bind(this) }
          />
        }

      </div>
    );
  }
}

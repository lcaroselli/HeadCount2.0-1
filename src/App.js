import React, { Component } from 'react';
// import Card from './Card.js';
import CardDisplay from './CardDisplay.js';
import Controls from './Controls.js';
import DistrictRepository from './helper.js';
import Background from './Background.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
// import './App.css';
// import '../styles/MyNameIs.css';

const districtData = new DistrictRepository(kinderData);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: districtData.findAllMatches(),
    };
  }

  searchData(userInput) {
    this.setState({
      cards: districtData.findAllMatches(userInput)
    });
  }


  render() {


    return (
      <div>

        <Background />
        <Controls
          search = { this.searchData.bind(this) } />
        <CardDisplay
          cardInfo={ this.state.cards } />

      </div>
    );
  }
}

import React, { Component } from 'react';
import backgroundGraphic from '../assets/background.jpg'

export default class Background extends Component {
  constructor() {
    super();
  }




  render() {
    return (
      <div>

        <section className='background-container'>

          <img className='background-graphic' src={backgroundGraphic}/>
        </section>

      </div>
    );
  }
}

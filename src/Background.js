import React, { Component } from 'react';
import backgroundGraphic from '../assets/background.jpg';
import PropTypes from 'prop-types';
import music from '../assets/01 Welcome to the Jungle.m4a';

export default class Background extends Component {
  constructor() {
    super();
  }




  render() {
    return (
      <div>

        <section className='background-container'>

          <img className='background-graphic' src={backgroundGraphic}/>

          <audio className='thunder-audio' autoPlay>
            <source src={music} autoPlay/>
          </audio>
        </section>

      </div>
    );
  }
}

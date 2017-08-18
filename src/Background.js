import React, { Component } from 'react';
import backgroundGraphic from '../assets/background.jpg';
import PropTypes from 'prop-types';

const Background = () => {

    return (
      <div>

        <section className='background-container'>

          <img className='background-graphic' src={backgroundGraphic}/>

        </section>

      </div>
    );

}

export default Background;

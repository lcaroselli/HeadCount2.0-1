import React, { Component } from 'react';
import backgroundGraphic from '../assets/background.jpg';

const Background = () => {
    return (
      <div>
        <section className='background-container'>
          <img className='background-graphic' src={ backgroundGraphic }/>
        </section>
      </div>
    );
}

export default Background;

import React, { Component } from 'react';
import Card from './Card.js';


export default class CardDisplay extends Component {
  constructor() {
    super();
  }




  render() {
    return (
      <div>
        <section className='card-display'>
          <div className='top-placeholder'></div>

          <section className='card-container'>
            <Card />
          </section>
        </section>

      </div>
    );
  }
}

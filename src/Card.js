import React, { Component } from 'react';

export default class Card extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className='card'>

          <section className='card-title-container'>
            <p className='card-title'>CARD TITLE</p>
          </section>

          <section className='card-data'>
            <ul>
              <li>DATA 1</li>
              <li>DATA 2</li>
              <li>DATA 3</li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}

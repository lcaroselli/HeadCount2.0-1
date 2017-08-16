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
            <p className='card-title'></p>
          </section>

          <section className='card-data'>
            <ul>
              <li>DATA</li>
            </ul>
          </section>

        </section>
      </div>
    );
  }
}

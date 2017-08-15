import React, { Component } from 'react';

export default class Controls extends Component {
  constructor() {
    super();
  }





  render() {
    return (
      <div>

          <section className='controls-container'>
           <section className='controls-header'>
            <input className='search-input' type='text'/>
            <div className='submit-btn' >
              <p className='submit-btn-title'>SEARCH</p>
            </div>
           </section>
          </section>


      </div>
    );
  }
}

import React, { Component } from 'react';
import logoWhite from '../assets/head-count-logo-white.png'
import PropTypes from 'prop-types'

export default class Controls extends Component {
  constructor() {
    super();
    this.state={

    }
  }

  resetSearch() {
    let userInput = document.querySelector('.search-input');
    userInput.value = '';
    this.props.reset()
  }


  render() {

    return (
      <div>
          <section className='header'>
            <section className='header-container'>
              <div className='header-container-background'></div>
              <section className='controls-header'>
                <section className='title-container'>
                  <img className='logo' src={logoWhite}/>
                  <h1 className='title'>HEAD COUNT 2.0</h1>
                </section>
                <section className='input-container'>
                  <div className='input-box'>
                    <input className='search-input' onChange={ this.props.handleChange }
                            type='text' placeholder='  Search School Districts' />
                    <div className='reset-btn' onClick={ this.resetSearch.bind(this) }>
                      <p className='reset-btn-title'>RESET</p>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </section>
      </div>
    );
  }
}

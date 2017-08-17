import React, { Component } from 'react';
import logo from '../assets/head-count-logo.png'
import logoWhite from '../assets/head-count-logo-white.png'
import PropTypes from 'prop-types'

export default class Controls extends Component {
  constructor() {
    super();
    this.state={
      input: ''
    } //state is only being used for search button, so we could just get rid of it
  }

  submitSearch()  {
    const userInput = this.state.input;
    this.props.handleChange(userInput)
  } //we might not need a search button so could get rid of this and the button

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
                    <input className='search-input' onChange={ this.props.handleChange } type='text' placeholder='  Enter Your Shit' />
                    <div className='submit-btn' disabled={!this.state.input} onClick={ this.submitSearch.bind(this) }>
                      <p className='submit-btn-title'>SEARCH</p>
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

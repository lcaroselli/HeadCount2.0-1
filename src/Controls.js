import React, { Component } from 'react';
import logo from '../assets/head-count-logo.png'
import logoWhite from '../assets/head-count-logo-white.png'
import PropTypes from 'prop-types'

export default class Controls extends Component {
  constructor() {
    super();
    this.state={
      input: ''
    }
  }

  resetSearch() {
    console.log('Its firing');
    this.setState({
      input: ''
    })
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
                    <input className='search-input' onChange={ this.props.handleChange } type='text' placeholder='  Enter Your Shit' />
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

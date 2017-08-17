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

  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  submitSearch()  {
    const userInput = this.state.input;
    this.props.search(userInput)
  }

  searchOnChange(e)  {
    this.updateInput(e);
    this.submitSearch();
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
                    <input className='search-input' onChange={ e => this.searchOnChange(e) } type='text'
                          placeholder='  Enter Your Shit' value={this.state.input} />
                    <div className='submit-btn' onClick={ this.submitSearch.bind(this) }>
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

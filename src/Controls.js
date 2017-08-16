import React, { Component } from 'react';
import logo from '../assets/head-count-logo.png'
import logoWhite from '../assets/head-count-logo-white.png'

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

  handleChange(input) {
    this.props.search()
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
                    <input className='search-input' onChange={ e => this.updateInput(e) } type='text'
                          placeholder='  Enter Your Shit' value={this.state.input} />
                    <div className='submit-btn' onClick={this.handleChange.bind(this)}>
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
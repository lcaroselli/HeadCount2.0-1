import React, { Component } from 'react';
import CardDisplay from './CardDisplay.js';
import PropTypes from 'prop-types'

const Card = ({ location, yearData }) => {
  const yearKeys = Object.keys(yearData);
  const colorTeal = {
    color: '#25727C'
  }
  const colorRed = {
    color: '#A63A50'
  }

  const dataYear = yearKeys.map((value, i) => {
    if (yearData[value] >= 0.5) {
      return <p key={ i } className='data' style={ colorTeal }> { value }: { yearData[value] }</p>
    } else {
       return <p key={ i } className='data' style={ colorRed }> { value }: { yearData[value] }</p>
    }
  })

    return (
      <div>
        <section className='card'>
          <section className='card-title-container'>
            <p className='card-title'> { location } </p>
          </section>

          <section className='card-data'>
            { dataYear }
          </section>

        </section>
      </div>
    );
  }

  Card.PropTypes = {
    dataYear: PropTypes.element.isRequired,
    dataYear: PropTypes.array.isRequired,
    location: PropTypes.element.isRequired,
    location: PropTypes.string.isRequired,
  }

export default Card;

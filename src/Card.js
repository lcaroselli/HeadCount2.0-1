import React, { Component } from 'react';
import CardDisplay from './CardDisplay.js';

const Card = ({ location, yearData }) => {
  const yearKeys = Object.keys(yearData);

  const dataYear = yearKeys.map((value, i) =>
    <p key={ i }>
    { value }: { yearData[value] } </p>)

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

export default Card;

import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';


const CardDisplay = ({ cardInfo }) => {

  const dataRender = cardInfo.map((school, i) =>
    <Card
    location = { school.location }
    yearData = { school.data }
    key = { i } />
  )

    return (
      <div>
        <section className='card-display'>
          <div className='top-placeholder'></div>
          <section className='card-container'>
            { dataRender }
          </section>
        </section>
      </div>
    );
  }

  CardDisplay.PropTypes = {
    dataRender: PropTypes.element.isRequired,
  }

export default CardDisplay;

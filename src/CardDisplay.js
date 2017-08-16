import React from 'react';
import Card from './Card.js';


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

export default CardDisplay;

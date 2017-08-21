import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardDisplay = ({ cardInfo, cardSelected }) => {

  const dataRender = cardInfo.map((school, i) =>
    <Card
    location = { school.location }
    yearData = { school.data }
    key = { i }
    selected = { school.selected }
    cardSelected = { cardSelected }
    />
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

  CardDisplay.propTypes = {
    cardInfo: PropTypes.array.isRequired,
  }

export default CardDisplay;

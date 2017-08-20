import React from 'react';
import PropTypes from 'prop-types';

const CompareDisplay = ({ comparisonInfo, hideComparison }) => {

  const compareObj = Object.keys(comparisonInfo)


    return (
      <div>
        <div className='compare-overlay'></div>
        <section className='compare-outer-container'>
          <section className='compare-container'>
            <div className='close-button' onClick={ () => hideComparison() }>
              <p className='close-button-title'>CLOSE</p>
            </div>
            <p className='compare'> { compareObj } </p>
          </section>
        </section>
      </div>
    );



  }

export default CompareDisplay;

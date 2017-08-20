import React from 'react';
import PropTypes from 'prop-types';

const CompareDisplay = ({ comparisonInfo, hideComparison }) => {

  const compareObj = Object.keys(comparisonInfo)


    return (
      <div>
        <div className='compare-overlay'></div>
        <section className='compare-outer-container'>
          <section className='compare-container'>
            <p className='compared-title'> COMPARED DATA </p>
            <p className='district1'> district 1 </p>
            <p className='compared'> compared </p>
            <p className='district2'> district 2 </p>
            <div className='close-button' onClick={ () => hideComparison() }>
            <p className='close-button-title'>CLOSE</p>
            </div>
          </section>
        </section>
      </div>
    );



  }

export default CompareDisplay;

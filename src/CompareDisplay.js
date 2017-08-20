import React from 'react';
import PropTypes from 'prop-types';

const CompareDisplay = ({ comparisonInfo, hideComparison }) => {

  const compareObjKeys = Object.keys(comparisonInfo);

  const compareAvgData = compareObjKeys.map((key, i) => {
    return (
      <p key={i}>{ comparisonInfo[key] }</p>
    )
  })

    return (
      <div>
        <div className='compare-overlay'></div>
        <section className='compare-outer-container'>
          <section className='compare-container'>
            <div className='close-button' onClick={ () => hideComparison() }>
              <p className='close-button-title'>CLOSE</p>
            </div>
            <p className='compare'> { compareObjKeys }</p>
            <p className='compare-data'> { compareAvgData }</p>
          </section>
        </section>
      </div>
    );



  }

export default CompareDisplay;

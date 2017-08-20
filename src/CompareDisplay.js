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
            <p className='compared-title'> COMPARED DATA </p>
            <p className='district1'> {compareObjKeys[0]} </p>
            <p className='district1'> {compareAvgData[0]} </p>
            <p className='compared'> {compareObjKeys[1]} </p>
            <p className='compared'> {compareAvgData[1]} </p>
            <p className='district2'> {compareObjKeys[2]} </p>
            <p className='district2'> {compareAvgData[2]} </p>
            <div className='close-button' onClick={ () => hideComparison() }>
            <p className='close-button-title'>CLOSE</p>
            </div>

          </section>
        </section>
      </div>
    );



  }

export default CompareDisplay;

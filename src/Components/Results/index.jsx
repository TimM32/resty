import React from 'react';
import './Results.scss';

function Results (props) {

    return (
      <section>
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    )
  };


export default Results;
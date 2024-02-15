import React from 'react';

import { range } from '../../utils';

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className="cell">
          {value ? value[i] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;

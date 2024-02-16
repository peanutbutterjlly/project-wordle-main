import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import Cell from '../Cell/Cell';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((i) => (
        <Cell key={i} 
              value={result ? result[i].letter : undefined} 
              status={result ? result[i].status : undefined} 
        />
      ))}
    </p>
  );
}

export default Guess;

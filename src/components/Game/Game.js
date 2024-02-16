import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('playing');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuesses(guessTry) {
    const nextGuesses = [...guesses, guessTry];
    setGuesses(nextGuesses);

    if (guessTry === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}/>
      <GuessInput gameStatus={gameStatus} handleSubmitGuesses={handleSubmitGuesses} />
      {gameStatus === 'won' && <WonBanner status={gameStatus} guesses={guesses.length}/>}
      {gameStatus === 'lost' && <LostBanner status={gameStatus} answer={answer}/>}
    </>
  );
}

export default Game;

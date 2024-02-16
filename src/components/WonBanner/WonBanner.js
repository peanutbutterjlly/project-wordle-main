import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({status, guesses}) {
  const guessNumberMessage = guesses === 1 ? 'guess' : 'guesses';
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{` ${guesses} ${guessNumberMessage}`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;

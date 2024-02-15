import React from 'react';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p key={index} className="guess">
          {guess}
        </p>
      ))}
      <div class="guess-results">
        <p class="guess">
          <span class="cell">H</span>
          <span class="cell">E</span>
          <span class="cell">L</span>
          <span class="cell">L</span>
          <span class="cell">O</span>
        </p>
        <p class="guess">
          <span class="cell">T</span>
          <span class="cell">H</span>
          <span class="cell">E</span>
          <span class="cell">R</span>
          <span class="cell">E</span>
        </p>
        <p class="guess">
          <span class="cell">W</span>
          <span class="cell">O</span>
          <span class="cell">R</span>
          <span class="cell">L</span>
          <span class="cell">D</span>
        </p>
        <p class="guess">
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
        </p>
        <p class="guess">
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell"></span>
        </p>
      </div>
    </div>
  );
}

export default GuessResults;

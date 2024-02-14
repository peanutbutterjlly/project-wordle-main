import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  /**
   * Handles the user's guess input.
   *
   * @param {Event} e - the event object
   * @return {void}
   */
  function handleGuess(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      alert('Guess must be 5 characters long!!1');
      return;
    }
    const transformedGuess = guess.toUpperCase();
    console.log(transformedGuess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;

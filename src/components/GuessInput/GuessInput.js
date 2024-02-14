import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  /**
   * Handles the user's guess input.
   *
   * @param {Event} e - the event object
   * @return {void}
   */
  function handleSubmit(e) {
    e.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={(e) => {
          const transformedGuess = e.target.value.toUpperCase();
          setGuess(transformedGuess);
        }}
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        maxLength="5"
        minLength="5"
        required
        type="text"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;

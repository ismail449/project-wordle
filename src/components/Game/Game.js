import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleInputSbumit(input) {
    setGuesses((guesses) => [
      ...guesses,
      { guess: input, id: crypto.randomUUID() },
    ]);
  }

  return (
    <>
      Put a game here!
      <Guesses guesses={guesses} />
      <Input onSubmit={handleInputSbumit} />
    </>
  );
}

export default Game;

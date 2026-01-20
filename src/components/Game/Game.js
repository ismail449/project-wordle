import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function generateEmptyGuesses() {
  return range(NUM_OF_GUESSES_ALLOWED).map(() => {
    const guess = range(5).map(() => ({
      char: null,
      id: crypto.randomUUID(),
    }));
    return { id: crypto.randomUUID(), guess, isEmpty: true };
  });
}

function Game() {
  const [guesses, setGuesses] = React.useState(generateEmptyGuesses);

  function handleInputSubmit(input) {
    setGuesses((guesses) => {
      const emptyGuessIndex = guesses.findIndex(({ isEmpty }) => isEmpty);

      if (emptyGuessIndex === -1) return guesses;

      const newGuesses = [...guesses];
      newGuesses[emptyGuessIndex].guess = newGuesses[emptyGuessIndex].guess.map(
        (guessItem, index) => ({
          ...guessItem,
          char: input.charAt(index),
        }),
      );

      newGuesses[emptyGuessIndex].isEmpty = false;
      return newGuesses;
    });
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <Input onSubmit={handleInputSubmit} />
    </>
  );
}

export default Game;

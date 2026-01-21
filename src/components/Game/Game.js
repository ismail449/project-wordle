import React from 'react';

import { range, sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import Input from '../Input/Input';
import Guesses from '../Guesses/Guesses';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function generateEmptyGuesses() {
  return range(NUM_OF_GUESSES_ALLOWED).map(() => {
    const guess = range(5).map(() => ({
      char: null,
      status: null,
      id: crypto.randomUUID(),
    }));
    return { id: crypto.randomUUID(), guess, isEmpty: true };
  });
}

function Game() {
  const [guesses, setGuesses] = React.useState(generateEmptyGuesses);

  function handleInputSubmit(input) {
    const guessStatus = checkGuess(input, answer);

    const emptyGuessIndex = guesses.findIndex(({ isEmpty }) => isEmpty);

    if (emptyGuessIndex === -1) return;

    const newGuesses = [...guesses];
    newGuesses[emptyGuessIndex].guess = newGuesses[emptyGuessIndex].guess.map(
      (guessItem, index) => ({
        ...guessItem,
        char: input.charAt(index),
        status: guessStatus[index].status,
      }),
    );

    newGuesses[emptyGuessIndex].isEmpty = false;

    setGuesses(newGuesses);
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <Input onSubmit={handleInputSubmit} />
    </>
  );
}

export default Game;

import React from 'react';
import Guess from '../Guess/Guess';

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <p className="guess" data-key={id} key={id}>
            <Guess guess={guess} />
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;

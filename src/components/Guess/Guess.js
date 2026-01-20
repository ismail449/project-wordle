import React from 'react';

function Guess({ guess }) {
  return (
    <>
      {guess.map(({ char, id }) => (
        <span key={id} data-key={id} className="cell">
          {char}
        </span>
      ))}
    </>
  );
}

export default Guess;

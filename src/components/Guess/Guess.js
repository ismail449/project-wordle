import React from 'react';

function Guess({ guess }) {
  return (
    <>
      {guess.map(({ char, id, status }) => (
        <span key={id} data-key={id} className={`cell ${status ? status : ''}`}>
          {char}
        </span>
      ))}
    </>
  );
}

export default Guess;

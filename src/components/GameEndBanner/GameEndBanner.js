import React from 'react';

function GameEndBanner({ gameStatus, answer, guessesNumber }) {
  let banner;

  if (gameStatus === 'won') {
    banner = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessesNumber} guesses</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === 'lost') {
    banner = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
  return <>{banner}</>;
}

export default GameEndBanner;

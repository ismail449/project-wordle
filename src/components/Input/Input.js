import React from 'react';

function Input({ onSubmit }) {
  const [inputValue, setInputValue] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit?.(inputValue);
    setInputValue('');
  }

  function handleInputChange(event) {
    const upperCaseInput = event.target.value.toUpperCase();
    setInputValue(upperCaseInput);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        pattern="\w{5,5}"
        title="5 letter word"
      />
    </form>
  );
}

export default Input;

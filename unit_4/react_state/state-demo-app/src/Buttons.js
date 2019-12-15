import React from 'react';

const Buttons = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>+</button>
      <button onClick={props.handleMinusClick}>-</button>
      <button>Change Theme</button>
    </>
  )
}

export default Buttons;

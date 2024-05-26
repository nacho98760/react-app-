import React from 'react';
import '../stylesheets/clearButton.css'

function ClearButton(props) {
  return (
    <div
      className="button-clear"
      onClick={() => props.manageClear(props.children)}>
      {props.children}
    </div>
  );
}

export default ClearButton;
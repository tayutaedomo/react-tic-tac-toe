import React from 'react';

export default (props) => {
  let styles = {};

  if (props.highlight) {
    styles = {backgroundColor: 'lime'};
  }

  return (
    <button
      style={styles}
      className='square'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

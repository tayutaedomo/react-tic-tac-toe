import React from 'react';

export default (props) => {
  let moves = props.history.map((step, move) => {
    let desc = '';
    let styles = {};

    if (move) {
      const col = step.i % 3 + 1;
      const row = Math.floor((step.i) / 3) + 1;
      desc = `Go to move #${move} (${col}, ${row})`;

    if (move == props.stepNumber) {
      styles = {'fontWeight':'bold'}
    }

    } else {
      desc = 'Go to game start';
    }

    return (
      <li key={move}>
        <button style={styles} onClick={() => props.jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  if (!props.order) {
    moves = moves.reverse();
  }

  return (
    <ol>{moves}</ol>
  );
}

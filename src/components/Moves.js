import React from 'react';

export default class Moves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: true,
    };
  }

  toggleOrder() { this.setState({
      order: !this.state.order,
    })
  }

  render() {
    let moves = this.props.history.map((step, move) => {
      let desc = '';
      let styles = {};

      if (move) {
        const col = step.i % 3 + 1;
        const row = Math.floor((step.i) / 3) + 1;
        desc = `Go to move #${move} (${col}, ${row})`;

      if (move == this.props.stepNumber) {
        styles = {'fontWeight':'bold'}
      }

      } else {
        desc = 'Go to game start';
      }

      return (
        <li key={move}>
          <button style={styles} onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    if (!this.state.order) {
      moves = moves.reverse();
    }

    return (
      <div>
        <ol>{moves}</ol>
        <button onClick={() => this.toggleOrder()}>Toggle</button>
      </div>
    );
  }
}

import React from 'react';
import Square from './Square';


export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={'col' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />);
  }

  render() {
    const row = 3;
    const col = 3;

    const boardRows = [...Array(row).keys()].map((r) => {
      const boardCols = [...Array(col).keys()].map((c) => {
        return this.renderSquare(r * col + c);
      });

      return (
        <div
          key={'row' + r}
          className="board-row"
        >
          {boardCols}
        </div>
      );
    });

    return (
      <div>
        {boardRows}
      </div>
    );
  }
}

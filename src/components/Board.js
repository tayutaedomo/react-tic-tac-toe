import React from 'react';
import Square from './Square';


export default class Board extends React.Component {
  renderSquare(i, highlight) {
    return (
      <Square
        key={'col' + i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        highlight={highlight}
      />);
  }

  render() {
    const row = 3;
    const col = 3;

    const boardRows = [...Array(row).keys()].map((r) => {
      const boardCols = [...Array(col).keys()].map((c) => {
        const i = r * col + c;
        const highlight = this.props.lines.indexOf(i) !== -1;
        return this.renderSquare(i, highlight);
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

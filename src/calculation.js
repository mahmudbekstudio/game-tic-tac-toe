import config from './config';

function Calculation() {
  const winMatrixList = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];
  let bestCellsForWin = [];

  const init = () => {
    bestCellsForWin = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  };
  const calculateBestCells = (turnIs, matrix) => {
    let i;
    for (i = 0; i < winMatrixList.length; i++) {
      const list = winMatrixList[i];
      let lineCanWin = true;
      let lineMyCellsCount = 0;

      for (let k = 0; k < list.length; k++) {
        if ([config.emptyCell, turnIs].indexOf(matrix[list[k][0]][list[k][1]]) === -1) {
          lineCanWin = false;
          break;
        }

        if(matrix[list[k][0]][list[k][1]] === turnIs) {
          lineMyCellsCount++;
        }
      }

      if(lineMyCellsCount === 2) {
        for (let k = 0; k < list.length; k++) {
          if(matrix[list[k][0]][list[k][1]] === config.emptyCell) {
            bestCellsForWin[list[k][0]][list[k][1]] = 100;
            break;
          }
        }
      }

      if (lineCanWin) {
        for (let k = 0; k < list.length; k++) {
          if (config.emptyCell === matrix[list[k][0]][list[k][1]]) {
            bestCellsForWin[list[k][0]][list[k][1]]++;
          }
        }
      }
    }
  };

  const bestMoveCell = () => {
    let bestMoveCell = [0, 0];

    for (let i = 0; i < bestCellsForWin.length; i++) {
      for (let k = 0; k < bestCellsForWin[i].length; k++) {
        if (bestCellsForWin[bestMoveCell[0]][bestMoveCell[1]] < bestCellsForWin[i][k]) {
          bestMoveCell = [i, k];
        }
      }
    }

    return bestMoveCell;
  };

  this.getBestMove = (turnIs, matrix) => {
    init();
    calculateBestCells(turnIs, matrix);
    return bestMoveCell();
  }
}

export default new Calculation();

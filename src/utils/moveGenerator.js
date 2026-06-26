function getPieceAt(row, col, boardPieces) {
  return boardPieces.find(
    (piece) => piece.row === row && piece.col === col
  );
}

function getPawnMoves(piece, boardPieces) {
  const moves = [];

  const direction = piece.color === "white" ? -1 : 1;
  const startingRow = piece.color === "white" ? 6 : 1;

  const nextRow = piece.row + direction;

  const pieceInFront = getPieceAt(
  nextRow,
  piece.col,
  boardPieces
  );

  if (!pieceInFront) {
    moves.push({
      row: nextRow,
      col: piece.col,
    });
  }

  const twoStepsRow = piece.row + direction * 2;

  const pieceTwoSquaresAhead = getPieceAt(
  twoStepsRow,
  piece.col,
  boardPieces
  );

  if (
    piece.row === startingRow &&
    !pieceInFront &&
    !pieceTwoSquaresAhead
  ) {
    moves.push({
      row: twoStepsRow,
      col: piece.col,
    });
  }
  const captureLeft = {
  row: nextRow,
  col: piece.col - 1,
};

const captureRight = {
  row: nextRow,
  col: piece.col + 1,
};

const leftPiece = getPieceAt(
  captureLeft.row,
  captureLeft.col,
  boardPieces
);
const rightPiece = getPieceAt(
  captureRight.row,
  captureRight.col,
  boardPieces
);
if (
  leftPiece &&
  leftPiece.color !== piece.color
) {
  moves.push(captureLeft);
}

if (
  rightPiece &&
  rightPiece.color !== piece.color
) {
  moves.push(captureRight);
}

  return moves;
}
function getKnightMoves(piece, boardPieces) {
  const moves = [];
  const knightOffsets = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];
for (const [rowOffset, colOffset] of knightOffsets) {
  const newRow = piece.row + rowOffset;
  const newCol = piece.col + colOffset;
  if (
  newRow < 0 ||
  newRow > 7 ||
  newCol < 0 ||
  newCol > 7
) {
  continue;
}
const destinationPiece = getPieceAt(
  newRow,
  newCol,
  boardPieces
);
if (
  !destinationPiece ||
  destinationPiece.color !== piece.color
) {
  moves.push({
    row: newRow,
    col: newCol,
  });
}

}
  
  return moves;
}

export function getLegalMoves(piece, boardPieces) {
  switch (piece.type) {
    case "pawn":
      return getPawnMoves(piece, boardPieces); 

     case "knight":
      return getKnightMoves(piece, boardPieces);

    default:
      return [];
  }
}
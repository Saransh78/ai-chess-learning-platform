export const pieceSymbols = {
  black: {
    rook: "♜",
    knight: "♞",
    bishop: "♝",
    queen: "♛",
    king: "♚",
    pawn: "♟",
  },
  white: {
    rook: "♖",
    knight: "♘",
    bishop: "♗",
    queen: "♕",
    king: "♔",
    pawn: "♙",
  },
};

export const pieces = [
  // Black back rank
  { type: "rook", color: "black", row: 0, col: 0 },
  { type: "knight", color: "black", row: 0, col: 1 },
  { type: "bishop", color: "black", row: 0, col: 2 },
  { type: "queen", color: "black", row: 0, col: 3 },
  { type: "king", color: "black", row: 0, col: 4 },
  { type: "bishop", color: "black", row: 0, col: 5 },
  { type: "knight", color: "black", row: 0, col: 6 },
  { type: "rook", color: "black", row: 0, col: 7 },

  // Black pawns
  ...Array.from({ length: 8 }, (_, col) => ({
    type: "pawn",
    color: "black",
    row: 1,
    col,
  })),

  // White pawns
  ...Array.from({ length: 8 }, (_, col) => ({
    type: "pawn",
    color: "white",
    row: 6,
    col,
  })),

  // White back rank
  { type: "rook", color: "white", row: 7, col: 0 },
  { type: "knight", color: "white", row: 7, col: 1 },
  { type: "bishop", color: "white", row: 7, col: 2 },
  { type: "queen", color: "white", row: 7, col: 3 },
  { type: "king", color: "white", row: 7, col: 4 },
  { type: "bishop", color: "white", row: 7, col: 5 },
  { type: "knight", color: "white", row: 7, col: 6 },
  { type: "rook", color: "white", row: 7, col: 7 },
];
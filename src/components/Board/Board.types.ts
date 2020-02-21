export type TTT = 'X' | 'O' | ' ';

export interface BoardState {
    gameBoard: TTT[];
    currentPlayer: TTT;
    winner: TTT | undefined;
}
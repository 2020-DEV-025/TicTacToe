export type TTT = 'X' | 'O' | ' ';

export interface BoardType {
    gameBoard: TTT[];
    currentPlayer: TTT;
}
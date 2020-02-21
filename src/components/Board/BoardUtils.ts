import { TTT } from "./Board.types";

const winPossibilities = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

export const checkWinner = (gameBoard: TTT[]): boolean => {
    let isWinner = false;
    
    winPossibilities.forEach((possibility) => {
        if (gameBoard[possibility[0]] === gameBoard[possibility[1]]
            && gameBoard[possibility[0]] === gameBoard[possibility[2]]
            && gameBoard[possibility[0]] !== ' '
            && gameBoard[possibility[1]] !== ' '
            && gameBoard[possibility[2]] !== ' ') {
            isWinner = true;
        }
    });
    
    return isWinner;
}
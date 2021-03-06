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

export const checkWinner = (gameBoard: TTT[]): TTT | undefined => {
    let result: TTT | undefined = undefined;

    winPossibilities.forEach((possibility) => {
        if (gameBoard[possibility[0]] === gameBoard[possibility[1]]
            && gameBoard[possibility[0]] === gameBoard[possibility[2]]) {

            if(gameBoard[possibility[0]] === "X"){
                result = "X";
            }
            if(gameBoard[possibility[0]] === "O"){
                result = "O";
            }
        }
    });

    if(result === undefined && isBoardFullfilled(gameBoard)){
        result = " ";
    }
    
    return result;
};

const isBoardFullfilled = (gameBoard: TTT[]):boolean => {
    let counter: number = 0;
    gameBoard.forEach((square) => {
        if(square !== " "){
            ++counter;
        }
    });

    if(counter === 9){
        return true;
    } else {
        return false;
    }
};

export const isMovePossible = (gameBoard: TTT[], index:number):boolean => {
    if(gameBoard[index]===" "){
        return true;
    } else {
        return false;
    }
};

export const makeMove = (gameBoard: TTT[], player: TTT, index:number):TTT[] => {
    if(isMovePossible(gameBoard, index)){
        gameBoard[index]=player;
    }
    return gameBoard;
};
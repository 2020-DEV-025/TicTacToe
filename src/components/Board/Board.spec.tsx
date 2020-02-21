import { TTT } from './Board.types';
import { checkWinner, isMovePossible, makeMove } from './BoardUtils';

describe('Tic Tac Toe', () => {
  
    it('move possible', () => {
        const gameBoard: TTT[] = ["X", "O", "X",
            " ", "O", " ",
            " ", "X", " "];
        
        expect(isMovePossible(gameBoard,5)).toBeTruthy();
    })
  
    it('move not possible', () => {
        const gameBoard: TTT[] = ["X", "O", "X",
            " ", "O", " ",
            " ", "X", " "];
        
        expect(isMovePossible(gameBoard,1)).toBeFalsy();
    })

    it('make the move in the good square', () => {
        const gameBoard: TTT[] = ["X", "O", "X",
            " ", "O", " ",
            " ", "X", " "];
        
        expect(makeMove(gameBoard,"X",5)[5]).toBe("X");
    })

    it('should have no winner yet', () => {
        const gameBoard: TTT[] = ["X", "O", "X",
            " ", "O", " ",
            " ", "X", " "];

        expect(checkWinner(gameBoard)).toBe(undefined);
    })


    it('should win if first row is filled by same player', () => {
        const gameBoard: TTT[] = ["X", "X", "X",
            " ", " ", " ",
            " ", " ", " "];

        expect(checkWinner(gameBoard)).toBe("X");
    })

    it('should win if second row is filled by same player', () => {
        const gameBoard: TTT[] = [" ", " ", " ",
            "O", "O", "O",
            " ", " ", " "];

        expect(checkWinner(gameBoard)).toBe("O");
    })

    it('should win if third row is filled by same player', () => {
        const gameBoard: TTT[] = [" ", " ", " ",
            " ", " ", " ",
            "X", "X", "X"];

        expect(checkWinner(gameBoard)).toBe("X");
    })

    it('should win if first column is filled by same player', () => {
        const gameBoard: TTT[] = ["X", " ", " ",
            "X", " ", " ",
            "X", " ", " "];

        expect(checkWinner(gameBoard)).toBe("X");
    })

    it('should win if second column is filled by same player', () => {
        const gameBoard: TTT[] = [" ", "O", " ",
            " ", "O", " ",
            " ", "O", " "];

        expect(checkWinner(gameBoard)).toBe("O");
    })

    it('should win if third column is filled by same player', () => {
        const gameBoard: TTT[] = [" ", " ", "O",
            " ", " ", "O",
            " ", " ", "O"];

        expect(checkWinner(gameBoard)).toBe("O");
    })

    it('should win if first diagonal is filled by same player', () => {
        const gameBoard: TTT[] = ["X", " ", " ",
            " ", "X", " ",
            " ", " ", "X"];

        expect(checkWinner(gameBoard)).toBe("X");
    })

    it('should win if second diagonal is filled by same player', () => {
        const gameBoard: TTT[] = [" ", " ", "O",
            " ", "O", " ",
            "O", " ", " "];

        expect(checkWinner(gameBoard)).toBe("O");
    })

    it('should win either the board is fullfilled', () => {
        const gameBoard: TTT[] = 
            ["X", "X", "O",
            "O", "X", "O",
            "O", "X", "X"];

        expect(checkWinner(gameBoard)).toBe("X");
    })

    it('end the game with draw if no one wins', () => {
        const gameBoard: TTT[] =
            ["X", "O", "X",
                "X", "O", "O",
                "O", "X", "X"];

        expect(checkWinner(gameBoard)).toBe(" ");
    })
});
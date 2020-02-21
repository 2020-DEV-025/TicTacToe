import { shallow } from 'enzyme';
import { TTT } from './Board.types';
import Board from './Board';
import { checkWinner } from './BoardUtils';

describe('Tic Tac Toe', () => {
    it('should win if first row is filled by same player', () => {
       const  gameBoard: TTT[] = ["X", "X", "X", 
                                 " ", " ", " ",
                                 " ", " ", " "];

        expect(checkWinner(gameBoard)).toBeTruthy();
    })
  });
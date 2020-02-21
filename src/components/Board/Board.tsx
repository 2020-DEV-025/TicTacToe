import React, { ReactNode } from 'react';
import Square from '../Square/Square';
import { BoardState, TTT } from './Board.types';

import './Board.styles.css';
import { checkWinner } from './BoardUtils';

const classNames = require('classnames');

class Board extends React.Component<{}, BoardState> {
    private nbSquare: number = 9;

    constructor(props) {
        super(props);
        this.state = {
            gameBoard: [" ", " ", " ",
                " ", " ", " ",
                " ", " ", " "],
            currentPlayer: 'X',
            winner: undefined,
        }
    }

    private nextPlayer = (): void => {
        const { currentPlayer, gameBoard } = this.state;
        if (checkWinner(gameBoard)) {
            this.setState({ winner: currentPlayer });
        }else {
            this.setState({ currentPlayer: currentPlayer === 'X' ? 'O' : 'X' });
        }
    }

    private handleClick = (i: number): void => {
        const { gameBoard, currentPlayer, winner } = this.state;
        const tmp = [...gameBoard];
        if(tmp[i]===" " && winner === undefined){
            tmp[i] = currentPlayer;
            this.setState({ gameBoard: tmp }, this.nextPlayer);
        }
        

        
    }

    public render = (): ReactNode => {
        const { winner, currentPlayer,gameBoard } = this.state;

        return (
            <div className="board">
                <div className="board-container">
                    {
                       gameBoard.map((value: any, index: number) => {
                           return (
                               <div key={index} className={classNames({'square-inline':  index % 3 !== 0})}>
                                <Square
                                    value={this.state.gameBoard[index]} 
                                    onClick={() => this.handleClick(index)} 
                                />
                                </div>
                           );
                       })
                    }
                </div>
                <div className="player-details">
                    <h3>Next Player: {currentPlayer}</h3>
                    {winner && (<h3>Winner: {winner}</h3>)}
                </div>
            </div>
        );
    }
}

export default Board;
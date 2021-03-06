import React, { ReactNode } from 'react';
import Square from '../Square/Square';
import { BoardState, TTT } from './Board.types';

import './Board.styles.css';
import { checkWinner, isMovePossible, makeMove } from './BoardUtils';

const classNames = require('classnames');

class Board extends React.Component<{}, BoardState> {

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
        const result: TTT | undefined = checkWinner(gameBoard);
        if (result === undefined) {
            this.setState({ currentPlayer: currentPlayer === 'X' ? 'O' : 'X' });
        } else {
            this.setState({ winner: result });
        }
    }

    private handleClickRestart = (): void => {

        let tmp: TTT[] = [
            " ", " ", " ",
            " ", " ", " ",
            " ", " ", " "]

        this.setState({ gameBoard: tmp });
        this.setState({ currentPlayer: "X" });
        this.setState({ winner: undefined });
    }

    private handleClick = (i: number): void => {
        const { gameBoard, currentPlayer, winner } = this.state;
        let tmp: TTT[] = [...gameBoard];
        if (isMovePossible(gameBoard, i) && winner === undefined) {
            tmp = makeMove(tmp, currentPlayer, i);
            this.setState({ gameBoard: tmp }, this.nextPlayer);
        }

    }

    public render = (): ReactNode => {
        const { winner, currentPlayer, gameBoard } = this.state;

        return (
            <div className="board">
                <div className="board-container">
                    {
                        gameBoard.map((value: any, index: number) => {
                            return (
                                <div key={index} className={classNames({ 'square-inline': index % 3 !== 0 })}>
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
                    {(winner === undefined && <h3>Next Player: {currentPlayer}</h3>)}
                    {(winner === "X" || winner === "O") && (<h4>Winner: {winner} <span>&#128526;</span></h4>)}
                    {(winner === " ") && (<h4>Draw ! <span>&#128533;</span></h4>)}
                    <button className="btn btn-success" onClick={() => this.handleClickRestart()}>Restart game</button>
                </div>
            </div>
        );
    }
}

export default Board;
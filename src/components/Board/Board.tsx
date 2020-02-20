import React from 'react';
import Square from '../Square/Square';
import { BoardType } from './Board.types';



class Board extends React.Component<{}, BoardType> {

    constructor(props) {
        super(props);
        this.state = {
            gameBoard: [" ", " ", " ",
                " ", " ", " ",
                " ", " ", " "],
            currentPlayer: 'X'
        }
    }

    handleClick(i: number) {
        const { gameBoard } = this.state;
        const tmp = [...gameBoard];
        tmp[i] = this.state.currentPlayer;
        this.setState({ gameBoard: tmp })

        this.setState({ currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X' });
    }

    render() {
        return (
                
                <div className="board-container">
                    <h3>Next Player: {this.state.currentPlayer}</h3>
                    <div className="row">
                        <Square value={this.state.gameBoard[0]} onClick={() => this.handleClick(0)} />
                        <Square value={this.state.gameBoard[1]} onClick={() => this.handleClick(1)} />
                        <Square value={this.state.gameBoard[2]} onClick={() => this.handleClick(2)} />
                    </div>
                    <div className="row">
                        <Square value={this.state.gameBoard[3]} onClick={() => this.handleClick(3)} />
                        <Square value={this.state.gameBoard[4]} onClick={() => this.handleClick(4)} />
                        <Square value={this.state.gameBoard[5]} onClick={() => this.handleClick(5)} />
                    </div>
                    <div className="row">
                        <Square value={this.state.gameBoard[6]} onClick={() => this.handleClick(6)} />
                        <Square value={this.state.gameBoard[7]} onClick={() => this.handleClick(7)} />
                        <Square value={this.state.gameBoard[8]} onClick={() => this.handleClick(8)} />
                    </div>
                </div>
        );
    }

    checkWinner = () => {
        const winPossibilities = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,5],
            [6,4,2]
        ]
    }
}

export default Board;
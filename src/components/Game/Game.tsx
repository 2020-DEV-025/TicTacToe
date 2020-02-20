import React from 'react';
import Board from '../Board/Board';

class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Board />
                </div>
            </div>
        )
    }
}

export default Game;
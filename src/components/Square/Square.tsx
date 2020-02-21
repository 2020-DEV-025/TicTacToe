import React from 'react';
import { SquareProps } from './Square.types';
import './Square.styles.css';

class Square extends React.PureComponent<SquareProps> {

    render() {
        const { value } = this.props;
        return (
            <button className="square" onClick={() => this.props.onClick()}> {value} </button>
        );
    }
}


export default Square;
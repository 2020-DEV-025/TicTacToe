import React from 'react';
import { SquareProps } from './Square.types';
import './Square.styles.css';

class Square extends React.PureComponent<SquareProps> {

    isClicked:boolean = false;

    render() {
        const { value } = this.props;
        let btn_class = "square";
        if(value === "X"){
            btn_class = "square-x";
        } else if(value ==="O") {
            btn_class = "square-o";
        } else {
            btn_class= "square";
        }
        return (
            <button className={btn_class} onClick={() => this.props.onClick()}> {value} </button>
        );
    }
}


export default Square;
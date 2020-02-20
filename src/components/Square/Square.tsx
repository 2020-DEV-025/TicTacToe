import React from 'react';
import { SquareProps } from './Square.types';

class Square extends React.PureComponent<SquareProps> {

    constructor(props: Readonly<SquareProps>) {
        super(props);
    }

    render() {
        const { value } = this.props;
        return (
            <button className="square" onClick={() => this.props.onClick()}> {value} </button>
        );
    }
}

// const Squares: React.FunctionComponent<SquareProps> = props => {
//     const { value } = props;
//     return (
//         <button className="square" onClick={() => alert('clic: '+value)}>{value}</button>
//     );
// }

export default Square;
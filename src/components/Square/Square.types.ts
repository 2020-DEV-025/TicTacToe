import { TTT } from "../Board/Board.types";

export interface SquareProps {
    value: TTT;
    onClick: () => void;
}
import Square from "./Square";
import './KeyBoard.css'
function KeyBoard(props) {
    const btn = 
    ["1", "2", "3", "+", 
    "4", "5", "6", "-", 
    "7", "8", "9", "*", 
    "=", "(", ")", "/","AC"]
    
    const renderSquare = i => {
        return (
            <Square value={btn[i]} exp = {props.exp} setExp = {props.setExp} setRes = {props.setRes} />
        )
    }

    return (
        <div className="keyboard">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
            </div>
            <div className="board-row">
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
            </div>
            <div className="board-row">
                {renderSquare(8)}
                {renderSquare(9)}
                {renderSquare(10)}
                {renderSquare(11)}
            </div>
            <div className="board-row">
                {renderSquare(12)}
                {renderSquare(13)}
                {renderSquare(14)}
                {renderSquare(15)}
            </div>
            <div className="board-row">
                {renderSquare(16)}
            </div>
        </div>
    )
}

export default KeyBoard;
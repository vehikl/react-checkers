import React from 'react';
import './App.css';

function App() {
    const squares = [
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7],
        [0,1,2,3,4,5,6,7]
    ]


    return (
        <div>
            <div data-testid='board' style={{display: "grid", gridTemplateColumns: "repeat(8, minmax(0, 1fr))", gridTemplateRows: "repeat(8, minmax(0, 1fr))", gridGap:"0px"}}>
                {
                    squares.map((row, rowIdx) => {
                        return row.map((_, colIdx) => {
                            return <Square key={`${rowIdx}-${colIdx}`} row={rowIdx} col={colIdx}></Square>
                        })
                    })
                }
            </div>
        </div>
    );
}

class Square extends React.Component<any, any> {
    render() {
        const backgroundColor = (this.props.row + this.props.col) % 2 === 0 ? "black" : "green";
        return <div data-testid="square" style={{width: "100px", height: "100px", backgroundColor }}/>
    }
}

export default App;

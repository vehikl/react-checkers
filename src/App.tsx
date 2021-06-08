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
            <div data-testid='board' style={{width: "800px", height: "800px", backgroundColor: "blue"}}>
                {
                    squares.map((row, rowIdx) => {
                        return row.map((_, colIdx)=>{
                            return <Square key={`${rowIdx}-${colIdx}`}></Square>
                        })
                    })
                }
            </div>
        </div>
    );
}

class Square extends React.Component<any, any> {
    render() {
        return <div data-testid="square" style={{ width: "10px", height: "10px" }}></div>
    }
}

export default App;

import React from 'react';
import './Chessboard.css';
import Square from '../square/Square';

function Chessboard(){

     

    //Create Notation of the chessboard
    let horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let notationBoard = [];
    for(let i=(verticalAxis.length-1); i>=0; i--){
        for(let j=0; j<horizontalAxis.length; j++){
            notationBoard.push(horizontalAxis[j] + verticalAxis[i]);
        }
    }

    //Index of white squares
    const whiteSquares = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22, 25, 27, 29, 31, 32, 34, 36, 38, 41, 43, 45, 47, 48, 50, 52, 54, 57, 59, 61, 63]
 
   //Move pieces
   function grabPiece(e){
    let piece = e.target;
    console.log(piece);
   }

  
    return (
        <div className='color' onMouseDown={(e) => grabPiece(e)}>
            {notationBoard.map((board, index) => {
                if(whiteSquares.includes(index)){
                    return <Square  css='squareNotation whiteSquare imageContainer' notation={board} />;
                } else{
                    return <Square css='squareNotation blackSquare imageContainer' notation={board} />;
                }
            })}
        </div>
    );
}

export default Chessboard;
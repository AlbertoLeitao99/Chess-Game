import React from 'react';
import './Pawn.css';

function Pawn(props){
    if(props.color === 'white'){
        return <div className="chessPiece">
            <img src='./images/pieces/white_pawn.png' alt='white pawn'></img>
        </div>   
    } else{
        return <img src='./images/pieces/black_pawn.png' alt='black pawn'></img>   
    }
    
}

export default Pawn;
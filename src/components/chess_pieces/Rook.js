import React from 'react';
import './Rook.css';

function Rook(props){
    if(props.color === 'white'){
        return <img src='./images/pieces/white_rook.png' alt='white rook'></img>   
    } else{
        return <img src='./images/pieces/black_rook.png' alt='black rook'></img>   
    }
    
}

export default Rook;
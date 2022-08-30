import React from 'react';
import './Queen.css';

function Queen(props){
    if(props.color === 'white'){
        return <img src='./images/pieces/white_queen.png' alt='white queen'></img>   
    } else{
        return <img src='./images/pieces/black_queen.png' alt='black queen'></img>   
    }
    
}

export default Queen;
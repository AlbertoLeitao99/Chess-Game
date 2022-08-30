import React from 'react';
import './King.css';

function King(props){
    if(props.color === 'white'){
        return <img src='./images/pieces/white_king.png' alt='white king'></img>   
    } else{
        return <img src='./images/pieces/black_king.png' alt='black king'></img>   
    }
    
}

export default King;
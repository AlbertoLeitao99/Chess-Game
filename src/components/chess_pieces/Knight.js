import React from 'react';
import './Knight.css';

function Knight(props){
    if(props.color === 'white'){
        return <img src='./images/pieces/white_knight.png' alt='white knight'></img>   
    } else{
        return <img src='./images/pieces/black_knight.png' alt='black knight'></img>   
    }
    
}

export default Knight;
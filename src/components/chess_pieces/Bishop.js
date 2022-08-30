import React from 'react';
import './Bishop.css';

function Bishop(props){
    if(props.color === 'white'){
        return <img src='./images/pieces/white_bishop.png' alt='white bishop'></img>   
    } else{
        return <img src='./images/pieces/black_bishop.png' alt='black bishop'></img>   
    }
    
}

export default Bishop;
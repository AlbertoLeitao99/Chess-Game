import React from 'react';
import './Square.css';
import Pawn from '../chess_pieces/Pawn';
import Rook from '../chess_pieces/Rook';
import Bishop from '../chess_pieces/Bishop';
import Knight from '../chess_pieces/Knight';
import King from '../chess_pieces/King';
import Queen from '../chess_pieces/Queen';

function Square(props){

    //Initial position of the chess pieces based in the notation of the chessboard
    //black pawn (BP)
    const initialPositionBP = ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
    //white pawn (WP)
    const initialPositionWP = ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

    if(initialPositionBP.includes(props.notation)){
        return <div className={props.css}>
            <Pawn color='black' />
        </div>
    }else if(initialPositionWP.includes(props.notation)){
        return <div className={props.css}>
            <Pawn color='white' />
        </div>
    }else if(props.notation === 'a8' || props.notation === 'h8'){
        return <div className={props.css}>
            <Rook color='black' />
        </div>
    }else if(props.notation === 'a1' || props.notation === 'h1'){
        return <div className={props.css}>
            <Rook color='white'/>
        </div>
    }else if(props.notation === 'c8' || props.notation === 'f8'){
        return <div className={props.css}>
            <Bishop color='black'/>
        </div>
    }else if(props.notation === 'c1' || props.notation === 'f1'){
        return <div className={props.css}>
            <Bishop color='white'/>
        </div>
    }else if(props.notation === 'b8' || props.notation === 'g8'){
        return <div className={props.css}>
            <Knight color='black'/>
        </div>
    }else if(props.notation === 'b1' || props.notation === 'g1'){
        return <div className={props.css}>
            <Knight color='white'/>
        </div>
    }else if(props.notation === 'e8'){
        return <div className={props.css}>
            <King color='black'/>
        </div>
    }else if(props.notation === 'e1'){
        return <div className={props.css}>
            <King color='white'/>
        </div>
    }else if(props.notation === 'd8'){
        return <div className={props.css}>
            <Queen color='black'/>
        </div>
    }else if(props.notation === 'd1'){
        return <div className={props.css}>
            <Queen color='white'/>
        </div>
    }
    else{
        return <div className={props.css}></div>
    }
  
}

export default Square;
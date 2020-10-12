import React from 'react';
import styled from 'styled-components';
import {colors, words} from './constants';
import {Word} from './Word';
import Spymaster from './Spymaster';
import Operative from './Operative';



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(colors) 
shuffleArray(words)
    
const wordList = [];
    for (var i = 0; i < 25; i++)  {
        wordList[i] = new Word(words[i],colors[i])
}


class Board extends React.Component{            
    renderBoard(i){
              
    return(
    
            <div>
                <Spymaster wordList = {wordList}/>     
                <Operative wordList = {wordList}/>           
            </div>);
    
   } 
    render(){
       
        return(
            <div>
                {this.renderBoard()}                    
            </div>
        );
    }
}

export default Board
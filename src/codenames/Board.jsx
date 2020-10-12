import React from 'react';
import styled from 'styled-components';
import {colors, words} from './constants';
import {Word} from './Word';

const Code = styled.button`

  background: ${props => props.bg.color};
  color: ${props => (props.bg.color == "red" || props.bg == "aqua") ? "black" : "white"};
  display: inline-block;
  border-radius: 3px;
  padding: 2.5rem 0.5em;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
`;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


class Board extends React.Component{    
    renderBoard(i){
       shuffleArray(colors) 
       shuffleArray(words)
        var i;
        const wordList = [];
        for (var i = 0; i < 25; i++)  {
            wordList[i] = new Word(words[i],colors[i])
    }
    const cardList = [];
    for (var i = 0; i < 25; i++)  {
        cardList[i] = <Code bg = {wordList[i]}>{words[i]}</Code>}
    return(

    <div>
        <div>{cardList.slice(0,5)}</div>
        <div>{cardList.slice(5,10)}</div>
        <div>{cardList.slice(10,15)}</div>
        <div>{cardList.slice(15,20)}</div>
        <div>{cardList.slice(20,25)}</div>
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
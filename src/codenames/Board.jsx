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
    return(
    <div>
        <div>
        <Code bg = {wordList[0]}>{words[0]}</Code>
        <Code bg = {wordList[1]}>{words[1]}</Code>
        <Code bg = {wordList[2]}>{words[2]}</Code>
        <Code bg = {wordList[3]}>{words[3]}</Code>
        <Code bg = {wordList[4]}>{words[4]}</Code>
        </div>
        <div>
        <Code bg = {wordList[5]}>{words[5]}</Code>
        <Code bg = {wordList[6]}>{words[6]}</Code>
        <Code bg = {wordList[7]}>{words[7]}</Code>
        <Code bg = {wordList[8]}>{words[8]}</Code>
        <Code bg = {wordList[9]}>{words[9]}</Code>
        </div>
        <div>
        <Code bg = {wordList[10]}>{words[10]}</Code>
        <Code bg = {wordList[11]}>{words[11]}</Code>
        <Code bg = {wordList[12]}>{words[12]}</Code>
        <Code bg = {wordList[13]}>{words[13]}</Code>
        <Code bg = {wordList[14]}>{words[14]}</Code>
        </div>
        <div>
        <Code bg = {wordList[15]}>{words[15]}</Code>
        <Code bg = {wordList[16]}>{words[16]}</Code>
        <Code bg = {wordList[17]}>{words[17]}</Code>
        <Code bg = {wordList[18]}>{words[18]}</Code>
        <Code bg = {wordList[19]}>{words[19]}</Code>
        </div>
        <div>
        <Code bg = {wordList[20]}>{words[20]}</Code>
        <Code bg = {wordList[21]}>{words[21]}</Code>
        <Code bg = {wordList[22]}>{words[22]}</Code>
        <Code bg = {wordList[23]}>{words[23]}</Code>
        <Code bg = {wordList[24]}>{words[24]}</Code>
        </div>
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
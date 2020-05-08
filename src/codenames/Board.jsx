import React from 'react';
import styled from 'styled-components';
import {colors, words} from './constants';


const Code = styled.button`
  background: ${props => props.bg};
  color: ${props => (props.bg == "red" || props.bg == "aqua") ? "black" : "white"};
  font-size: 0.9em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content:center;
  border: 2px solid black;
  border-radius: 3px;
  width: 100px;
  height: 100px;
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
    return(
    <div>
        <div> 
        <Code bg = {colors[0]}>{words[0]}</Code>
        <Code bg = {colors[1]}>{words[1]}</Code>
        <Code bg = {colors[2]}>{words[2]}</Code>
        <Code bg = {colors[3]}>{words[3]}</Code>
        <Code bg = {colors[4]}>{words[4]}</Code>
        </div>
        <div>
        <Code bg = {colors[5]}>{words[5]}</Code>
        <Code bg = {colors[6]}>{words[6]}</Code>
        <Code bg = {colors[7]}>{words[7]}</Code>
        <Code bg = {colors[8]}>{words[8]}</Code>
        <Code bg = {colors[9]}>{words[9]}</Code>
        </div>
        <div>
        <Code bg = {colors[10]}>{words[10]}</Code>
        <Code bg = {colors[11]}>{words[11]}</Code>
        <Code bg = {colors[12]}>{words[12]}</Code>
        <Code bg = {colors[13]}>{words[13]}</Code>
        <Code bg = {colors[14]}>{words[14]}</Code>
        </div>
        <div>
        <Code bg = {colors[15]}>{words[15]}</Code>
        <Code bg = {colors[16]}>{words[16]}</Code>
        <Code bg = {colors[17]}>{words[17]}</Code>
        <Code bg = {colors[18]}>{words[18]}</Code>
        <Code bg = {colors[19]}>{words[19]}</Code>
        </div>
        <div>
        <Code bg = {colors[20]}>{words[20]}</Code>
        <Code bg = {colors[21]}>{words[21]}</Code>
        <Code bg = {colors[22]}>{words[22]}</Code>
        <Code bg = {colors[23]}>{words[23]}</Code>
        <Code bg = {colors[24]}>{words[24]}</Code>
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
import React from 'react';
import styled from 'styled-components';

const colors = ["red", "red", "red", "red", "red", "red", "red", "red", "aqua","aqua","aqua","aqua","aqua","aqua","aqua","aqua","aqua","black", "grey","grey","grey","grey","grey","grey","grey"]

const Code = styled.button`
  background: ${props => props.bg};
  color: ${props => (props.bg == "red" || props.bg == "aqua") ? "black" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
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
    return(
    <div>
        <div>
        <Code bg = {colors[0]}>Word</Code>
        <Code bg = {colors[1]}>Word</Code>
        <Code bg = {colors[2]}>Word</Code>
        <Code bg = {colors[3]}>Word</Code>
        <Code bg = {colors[4]}>Word</Code>
        </div>
        <div>
        <Code bg = {colors[5]}>Word</Code>
        <Code bg = {colors[6]}>Word</Code>
        <Code bg = {colors[7]}>Word</Code>
        <Code bg = {colors[8]}>Word</Code>
        <Code bg = {colors[9]}>Word</Code>
        </div>
        <div>
        <Code bg = {colors[10]}>Word</Code>
        <Code bg = {colors[11]}>Word</Code>
        <Code bg = {colors[12]}>Word</Code>
        <Code bg = {colors[13]}>Word</Code>
        <Code bg = {colors[14]}>Word</Code>
        </div>
        <div>
        <Code bg = {colors[15]}>Word</Code>
        <Code bg = {colors[16]}>Word</Code>
        <Code bg = {colors[17]}>Word</Code>
        <Code bg = {colors[18]}>Word</Code>
        <Code bg = {colors[19]}>Word</Code>
        </div>
        <div>
        <Code bg = {colors[20]}>Word</Code>
        <Code bg = {colors[21]}>Word</Code>
        <Code bg = {colors[22]}>Word</Code>
        <Code bg = {colors[23]}>Word</Code>
        <Code bg = {colors[24]}>Word</Code>
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
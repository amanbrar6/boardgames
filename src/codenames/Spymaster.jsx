import React from 'react';
import styled from 'styled-components';
import {colors, words} from './constants';
import {Word} from './Word';
import Board from './Board';

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

const cardList = [];
            

class Spymaster extends React.Component{
    spymasterView(){
        const wordList = this.props.wordList;
        const cardList = [];
        for (var i = 0; i < 25; i++)  {
            cardList[i] = <Code bg = {wordList[i]}>{words[i]}</Code>
        }
            return(
                <div>
                <div>{cardList.slice(0,5)}</div>
                <div>{cardList.slice(5,10)}</div>
                <div>{cardList.slice(10,15)}</div>
                <div>{cardList.slice(15,20)}</div>
                <div>{cardList.slice(20,25)}</div>
                </div>
            );
    }
    render(){
        return(<div>
            {this.spymasterView()}
        </div>
            
        );
    }
    

    }

export default Spymaster
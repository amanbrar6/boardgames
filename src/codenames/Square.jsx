import React from 'react';
import styled from 'styled-components';


const Code = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.secondary ? "red" : "blue"};
  color: ${props => props.primary ? "black" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;




class Board extends React.Component{
   renderRow(i){
       return(
    <div>
    <Code>Word</Code>
    <Code>Word</Code>
    <Code>Word</Code>
    <Code>Word</Code>
    <Code>Word</Code>
    </div>);
   } 
    render(){
        return(
            <div>
                {this.renderRow(0)}
                {this.renderRow(1)} 
                {this.renderRow(2)} 
                {this.renderRow(3)} 
                {this.renderRow(4)}                     
            </div>
        );
    }
}

export default Board
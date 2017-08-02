import React, { Component } from 'react';

const CharactersList = (props) => {
  return(
    <div>
    {props.list.map((char,key) => 
      <p style={{color:char.color}} key={key}>{char.char}</p>
    )}
    </div>
  )
}

export default CharactersList;

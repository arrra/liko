import React, { Component } from 'react';

const CharactersList = (props) => {
  return(
    <div>
    {props.list.map((char,key) => 
      <p key={key}>{char}</p>
    )}
    </div>

  )  
}

export default CharactersList;

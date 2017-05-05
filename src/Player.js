import React from 'react';

//this is the purest component, it's the easiest to test, and what it does is very straight forward. 

const Player =({ name, handleChange, handleSubmit }) => (
  <form onSubmit={ handleSubmit }>
    <label>Name: </label>
    <input 
      onChange={ handleChange } 
      value={ name } 
      required 
    />
  </form>
);

export default Player;
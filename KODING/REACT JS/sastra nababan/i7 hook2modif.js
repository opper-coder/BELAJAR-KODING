// bikin 1 logic untuk di share bertiga dalam kasus
// - Subscribe
// - like
// - dislike

import React, { Component, useState } from 'react';

// import logo from './logo.svg';
import './App.css';
// ==================================

const useCounter =()=>{
  const [state, setState] = useState(0)

  const handleState = () => {
    setState(currenState => currenState + 1)
    }

  const HandleTriple = () => {
    handleState()
    handleState()
    handleState()
  } 

  return[
    state,
    handleState,
    HandleTriple
  ]
  }

// -----
  const Subscribe = () => {
    
    const [state, setState] = useState({
      subscribe : false,
      like  : 0,
      dislike : 0
    })
  // -----    
    const [Like, HandleLike,HandleTriple] = useCounter (0)
    const [Dislike, HandleDisLike] = useCounter (0)
  // -----
    const HandleSubscribe = () => {
      setState({
        ...state,
        subscribe : !state.subscribe
      })
    }

    return(
      <div>
        <h4>Subscribe</h4>
        <p>
          <button onClick = {HandleSubscribe}> Subscribe </button><span> {JSON.stringify(state.subscribe)}</span>
        </p>
        <p>
          <button onClick = {HandleLike}> like </button><span> {Like}</span>
        </p>
        <p>
          <button onClick = {HandleDisLike}> dislike </button><span> {Dislike}</span>
        </p>
        <p>
          <button onClick = {HandleTriple}> triplelike </button><span> {Like}</span>
        </p>
      </div>
    );
  }

// ==================================
function App() {
  return (
    <div className="App">
      <header className="App-header">
             
      <h4>halooo aqiil</h4>
      <Subscribe />

      </header>
    </div>
  );
}

export default App;
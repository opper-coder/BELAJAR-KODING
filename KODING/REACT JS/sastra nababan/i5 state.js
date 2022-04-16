import React, { Component, useState } from 'react';

class CounterState extends React.Component{
    state = {
      count : 0
    }
    onUpdate = () => {
      this.setState({
        count : this.state.count + 1 
      })
    }
  render(){
    return(
      <div>
        <h1>CounterState = {this.state.count}</h1>
        <button onClick={this.onUpdate}>tambah!</button>
      </div>     
    );
  }}
// pemanggilan tidak mengirim mengoper apapun
<CounterState />
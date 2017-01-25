import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import './App.css';

const Increment = ({counter, onIncrementClick, onDecrementClick}) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={onIncrementClick}> + </button>
    <button onClick={onDecrementClick}> - </button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch({ type: 'INCREMENT' });
    },
    onDecrementClick: () => {
      dispatch({ type: 'DECREMENT' });
    }
  }
};

const App = connect(mapStateToProps, mapDispatchToProps)(Increment);

export default App;

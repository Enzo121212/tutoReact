// Counter.js

import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux';

const Counter = (props) => {
  return (
    <div>
      <h1>Compteur : {props.count}</h1>
      <button onClick={props.increment}>Incrémenter</button>
      <button onClick={props.decrement}>Décrémenter</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

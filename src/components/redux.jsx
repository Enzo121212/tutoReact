// redux.js

import { createStore } from 'redux';

// Étape 2 : Définissez les actions
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// Étape 3 : Définissez un réducteur pour gérer l'état
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Étape 4 : Créez le store
const store = createStore(counterReducer);

export { increment, decrement, store };

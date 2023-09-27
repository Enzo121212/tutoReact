import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './reduxtoolkit/store';
import Counter from './components/Counter';
import Tuto from './components/Tuto';
import CounterRedux from './components/CounterRedux';
import BouttonPlayPauseRedux from './components/BouttonPlayPauseRedux';
import View from './reduxtoolkit/View';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
            <View/>
      </div>
    </Provider>
  );
}

export default App;

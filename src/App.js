import React from 'react';
import Globalstyle from './style';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/Header'

function App() {
  return (
    <Provider store={store}>
      <Globalstyle/>
      <Header/>
    </Provider>
  );
}

export default App;

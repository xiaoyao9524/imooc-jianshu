import React from 'react';
import Globalstyle from './style';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';

import Header from './common/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Globalstyle />
        <Router>
          <Header />
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/detail" component={Detail} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

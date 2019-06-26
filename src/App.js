import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

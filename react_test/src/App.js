import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <>
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/detail" component={Detail} />
    </BrowserRouter>
    </>
  );
}

export default App;

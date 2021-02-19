import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import Brother from './pages/brother'
function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/brother" component={Brother} />
    </BrowserRouter>
    </>
  );
}

export default App;

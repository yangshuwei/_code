import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import Brother from './pages/brother'
import WillReceiveProps from './pages/willprops'
// import Hoc from './pages/hoc'
function App() {
  return (
    <>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/brother" component={Brother} />
      {/* <Route path="/hoc" component={Hoc} /> */}
        <Route path="/will" component={WillReceiveProps} />
    </BrowserRouter>
    </>
  );
}

export default App;

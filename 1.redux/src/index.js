import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './redux';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import store from './store'
import {Provider} from './react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Counter1 />
      <hr />
      {/* <Counter2 /> */}
    </div>
  </Provider>
  ,
  document.getElementById('root')
);

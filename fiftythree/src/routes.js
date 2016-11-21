import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ButtonA from './components/button_a';
import ButtonB from './components/button_b';
import ModalA from './components/modal_a';
import ModalB from './components/modal_b';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ButtonA}>
      <Route path='/modalA' component={ModalA}/>
      </IndexRoute>
    <IndexRoute component={ButtonB}>
      <Route path='/modalB' component={ModalB}/>
    </IndexRoute>
  </Route>

);

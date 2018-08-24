/**
 * Created by Sahil on 8/24/18.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(thunk),
);
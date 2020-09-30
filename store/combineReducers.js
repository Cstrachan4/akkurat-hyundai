import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import index from './index/reducer';

export default function configureStore(preloadedState = {}) {
  const reducer = combineReducers({
    index: index
  });

  return createStore(reducer, preloadedState, composeWithDevTools());
}

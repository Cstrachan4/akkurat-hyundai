import * as actionTypes from './actionTypes.js';

export function updateIndex(key, value) {
  return {
    type: actionTypes.UPDATE_INDEX,
    key,
    value
  };
}

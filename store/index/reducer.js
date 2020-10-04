import * as actionTypes from './actionTypes.js';

const INITIAL_STATE = {
  amber: {
    displayHero: false
  },
  paper: {
    display: false
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.UPDATE_INDEX:
      return {
        ...state,
        [action.key]: action.value,
      };
      break;

    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from './actionTypes.js';

const INITIAL_STATE = {
  hovered: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.UPDATE_INDEX:
      if (action.key === 'type' && action.value !== state.type && action.columns) {
        // Attempt to preserve column selections when changing chart type, but
        // reset everything else
        return {
          ...INITIAL_STATE,
          type: action.value,
          x: filterValidColumns(state.x, action.value, 'x', action.columns),
          y: filterValidColumns(state.y, action.value, 'y', action.columns),
        };
      } else {
        // Otherwise just update the specific key supplied
        return {
          ...state,
          [action.key]: action.value,
        };
      }
      break;

    default:
      return state;
  }
};

export default reducer;

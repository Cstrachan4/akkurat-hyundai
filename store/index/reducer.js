import * as actionTypes from './actionTypes.js';

const INITIAL_STATE = {
  scroll: 0,
  intro: {
    initial: true,
    resized: false,
    timeout: 4250,
    first: true
  },
  bts: {
    displayHero: false
  },
  amber: {
    displayHero: false
  },
  paper: {
    display: false,
    displayHero: false
  },
  logo: {
    display:false
  },
  video: {
    displayPlay: false,
    controls: false,
    url: 'assets/video/Preview.mp4',
    preview: true,
    muted: true
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

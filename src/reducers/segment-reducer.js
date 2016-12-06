import {
  CLICK_NEXT_SEGMENT,
  SELECT_PROGRAM,
} from 'Actions/action-types';

const initialState = {
  currentSegment: 1,
  currentProgram: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK_NEXT_SEGMENT:
      return {
        ...state,
        currentSegment: state.currentSegment + 1
      };
    case SELECT_PROGRAM:
      return {
        ...state,
        currentProgram: action.payload.program,
      };
    default:
      return state;
  }
};

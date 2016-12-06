import {
  CLICK_NEXT_SEGMENT,
  SELECT_PROGRAM,
} from './action-types';

export const clickNextSegment = ({
  type: CLICK_NEXT_SEGMENT,
});

export const selectProgram = program => ({
  type: SELECT_PROGRAM,
  payload: { program },
});

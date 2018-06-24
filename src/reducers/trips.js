import actions from '@enums/actions'

export default function (state = [], action) {
  switch(action.type) {
    case actions.TRIPS.INIT:
      state = action.payload;
      break;

    case actions.TRIPS.NEW_TRIP:
      state.push(action.payload);
      break;

    case actions.TRIPS.UPDATE_TRIP:
      state[action.index] = { ...state[action.index], ...action.payload };
      break;

    default: 
      state;
      break;
  }

  return state;
}
import actions from '@enums/actions'

export default function (state = {}, action) {
  switch(action.type) {
    case actions.USERS.CREATE_USER: 
      state = action.payload;
      break;

    default: 
      state;
      break;
  }

  return state;
}
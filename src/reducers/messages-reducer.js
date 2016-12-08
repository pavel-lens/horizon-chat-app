import { ADD_MESSAGE } from '../actions'

function getDefaultState() {
  return [];
}

export function messsagesReducer(state = getDefaultState(), action) {
  const { payload: message } = action;

  switch (action.type) {
    case ADD_MESSAGE:
      console.log(`Storing new message via Redux:\n${JSON.stringify(message)}`);
      return [
        ...state,
        Object.assign({}, message)
      ];
    default:
      return state;
    }

  return state;
}

import { ADD_MESSAGE } from '../actions'

function getDefaultState() {
  return {
    messages: [],
  }
}

export function sendMesssageReducer(state = getDefaultState(), action) {
  const { payload: message } = action;

  switch (action.type) {
    case ADD_MESSAGE:
      console.log(`Storing new message via Redux:\n${JSON.stringify(message)}`);
      return state;
    default:
      return state;
    }

  return state;
}

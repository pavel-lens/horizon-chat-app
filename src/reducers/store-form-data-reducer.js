import { STORE_FORM_DATA } from '../actions'

function getDefaultState() {
  return {
    author: '',
    text: '',
  };
}

export function storeFormDataReducer(state = getDefaultState(), action) {
  const { payload: {...data} } = action;

  switch (action.type) {
    case STORE_FORM_DATA:
      console.log(`Storing form data via Redux:\n${JSON.stringify(data)}`);
      return Object.assign({}, state, {...data});
    default:
      break;
  }

  return state;
}

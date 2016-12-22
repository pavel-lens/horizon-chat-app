import { STORE_FORM_DATA } from '../actions'

function getDefaultState() {
  return {
    author: '',
    message: '',
  };
}

export function storeFormDataReducer(state = getDefaultState(), action) {
  const { payload: {...data} } = action;

  switch (action.type) {
    case STORE_FORM_DATA:
      console.log(`Storing form data via Redux:\n${JSON.stringify(data)}`);
      return [
        ...state,
        Object.assign({}, {...data})
      ];
    default:
      break;
  }

  return state;
}

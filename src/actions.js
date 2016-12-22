export const ADD_MESSAGE = 'ADD_MESSAGE'
export const STORE_FORM_DATA = 'STORE_FORM_DATA'

export const createAction = (actionType, payload = {}) => {
  return {
    type: actionType,
    payload: payload,
  }
}

export const addMessage = (payload) => createAction(ADD_MESSAGE, payload);
export const storeFormData = (payload) => createAction(STORE_FORM_DATA, payload);

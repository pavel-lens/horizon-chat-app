export const ADD_MESSAGE = 'ADD_MESSAGE'

export const createAction = (actionType, payload = {}) => {
  return {
    type: actionType,
    payload: payload,
  }
}

export const addMessage = (payload) => createAction(ADD_MESSAGE, payload);

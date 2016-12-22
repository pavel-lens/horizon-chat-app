import { combineReducers, createStore } from 'redux'
import { messsagesReducer } from './reducers/messages-reducer'
import { storeFormDataReducer } from './reducers/store-form-data-reducer'

const reducers = combineReducers({
  messages: messsagesReducer,
  formData: storeFormDataReducer,
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

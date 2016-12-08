import { combineReducers, createStore } from 'redux'
import { messsagesReducer } from './reducers/messages-reducer'


const reducers = combineReducers({
  messages: messsagesReducer,
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

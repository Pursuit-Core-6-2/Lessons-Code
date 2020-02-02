import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import filmsReducer from './filmsReducer'

const rootReducer = combineReducers({
  // partOfState: reducerInCharge 
  counterState: counterReducer,
  filmsState: filmsReducer
})

export default rootReducer;

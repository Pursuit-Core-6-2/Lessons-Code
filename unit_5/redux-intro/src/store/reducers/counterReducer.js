import { INCREMENT, DECREMENT } from "../actionTypes"
const initialState = {
  counter: 100
}

const counterReducer = (state = initialState, action) => {
  console.log('counterReducer running', action);

  const stateCopy = { ...state } // Making a copy current state

  switch (action.type) {
    // cases and default
    case INCREMENT:
      stateCopy.counter = stateCopy.counter + 1
      break;

    case DECREMENT:
      stateCopy.counter--;
      break;

    default:
      break;
  }

  return stateCopy
}

export default counterReducer;

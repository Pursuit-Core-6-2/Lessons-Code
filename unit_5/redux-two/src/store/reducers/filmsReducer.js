import { RECEIVE_FILMS } from '../actionTypes';

const initialState = {
  films: []
}

const filmsReducer = (state = initialState, action) => {
  // copy state
  const newState = { ...state }

  // Deicide how the state is to be modified
  // depending on the action type
  switch (action.type) {
    case RECEIVE_FILMS:
      newState.films = action.payload
      break;

    default:
      break;

  }

  return newState;

}

export default filmsReducer;

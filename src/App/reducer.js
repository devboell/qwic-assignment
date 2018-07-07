import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
} from './actions'


const initialState = {
  isFetching: false,
  characters: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CHARACTERS:
      return {
        characters: action.characters,
        isFetching: false,
      }
    default:
      return state
  }
}

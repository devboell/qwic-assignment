import {
  lensProp,
  lensPath,
  set,
  compose,
} from 'ramda'
import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
} from './actions'


const initialState = {
  isFetching: false,
  characterType: 'anime',
  characters: {
    anime: [],
    manga: [],
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTERS:
      return {
        ...state,
        isFetching: true,
      }

    case RECEIVE_CHARACTERS:
      return compose(
        set(lensPath(['characters', action.characterType]), action.characters),
        set(lensProp('isFetching'), false),
      )(state)

    default:
      return state
  }
}

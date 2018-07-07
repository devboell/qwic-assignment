import {
  lensProp,
  lensPath,
  set,
  compose,
} from 'ramda'
import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  SELECT_CHARACTER_TYPE,
} from './actions'
import { characterTypes } from './constants'


const initialState = {
  isFetching: false,
  characterType: characterTypes.ANIME,
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

    case SELECT_CHARACTER_TYPE:
      return set(lensProp('characterType'), action.characterType, state)

    default:
      return state
  }
}

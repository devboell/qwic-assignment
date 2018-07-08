export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'
export const SELECT_CHARACTER_TYPE = 'SELECT_CHARACTER_TYPE'
export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const requestCharacters = () => ({
  type: REQUEST_CHARACTERS,
})

export const receiveCharacters = (characters, characterType) => ({
  type: RECEIVE_CHARACTERS,
  characters,
  characterType,
})

export const selectCharacterType = characterType => ({
  type: SELECT_CHARACTER_TYPE,
  characterType,
})

export const updateSearch = text => ({
  type: UPDATE_SEARCH,
  text,
})

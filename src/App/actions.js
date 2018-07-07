export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'


export const requestCharacters = () => ({
  type: REQUEST_CHARACTERS,
})

export const receiveCharacters = (characters, characterType) => ({
  type: RECEIVE_CHARACTERS,
  characters,
  characterType,
})

import { requestCharacters, receiveCharacters } from './actions'

export const extractCharacterData = (json) => {
  const result = json.data.map((character, i) => {
    const characterInfo = json.included[i]
    return {
      id: characterInfo.id,
      name: characterInfo.attributes.name,
      type: character.type,
      createdAt: characterInfo.attributes.createdAt,
      updatedAt: characterInfo.attributes.updatedAt,
      role: character.attributes.role,
    }
  })

  return result
}

export const fetchCharacters = () => (dispatch) => {
  dispatch(requestCharacters())
  fetch('https://kitsu.io/api/edge/anime-characters?include=character',
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
    })
    .then(res => res.json())
    .then(json => dispatch(receiveCharacters(json.data)))
}

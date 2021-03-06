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

const fetchUrl = type => (
  `https://kitsu.io/api/edge/${type}-characters?include=character`)

const fetchOptions = {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
}

export const fetchCharacters = type => (dispatch) => {
  dispatch(requestCharacters())
  fetch(fetchUrl(type), fetchOptions)
    .then(res => res.json())
    .then(json => dispatch(receiveCharacters(extractCharacterData(json), type)))
}

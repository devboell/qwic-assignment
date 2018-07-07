import { requestCharacters, receiveCharacters } from './actions'

export const fetchCharacters = () =>
  dispatch => {
    dispatch(requestCharacters())
    fetch('https://kitsu.io/api/edge/anime-characters?include=character',
      {
        method: "GET",
        headers: {
          "Accept": "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        }
      }
    )
      .then(res => res.json())
      .then(json => dispatch(receiveCharacters(json.data)))
  }

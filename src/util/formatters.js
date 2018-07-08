import {
  cond,
  equals,
  always,
  T,
} from 'ramda'

export const dateFormatter = (str) => {
  const date = new Date(str)
  return date.toDateString()
}

export const characterTypeFormatter = str => cond(
  [
    [equals('animeCharacters'), always('Anime')],
    [equals('mangaCharacters'), always('Manga')],
    [T, always('Unknown')],
  ],
)(str)

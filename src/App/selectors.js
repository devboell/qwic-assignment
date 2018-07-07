import { createSelector } from 'reselect'

const characters = state => state.characters[state.characterType]

export const getCharacters = createSelector(
  characters,
  chrs => chrs,
)

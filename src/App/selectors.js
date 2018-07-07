import {
  sortBy,
  compose,
  toLower,
  prop,
} from 'ramda'
import { createSelector } from 'reselect'

const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))

const characters = state => state.characters[state.characterType]


export const getCharacters = createSelector(
  characters,
  chrs => sortByNameCaseInsensitive(chrs),
)

export const getShouldFetch = createSelector(
  characters,
  chrs => chrs.length === 0,
)

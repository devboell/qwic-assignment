import {
  sortBy,
  compose,
  toLower,
  prop,
  filter,
} from 'ramda'
import { createSelector } from 'reselect'

const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))
const filterByName = text => (chr) => {
  const regex = new RegExp(text, 'i')
  return chr.name.search(regex) >= 0
}

const sortAndFilterCharacters = (chrs, text) => compose(
  sortByNameCaseInsensitive,
  filter(filterByName(text)),
)(chrs)

const characters = state => state.characters[state.characterType]
const searchText = state => state.searchText


export const getCharacters = createSelector(
  characters,
  searchText,
  sortAndFilterCharacters,
)

export const getShouldFetch = createSelector(
  characters,
  chrs => chrs.length === 0,
)

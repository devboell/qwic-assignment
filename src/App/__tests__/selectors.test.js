import { getCharacters } from '../selectors'
import animeCharacters from '../../test_data/characters_anime'
import { characterTypes } from '../constants'

const state = {
  characters: { anime: animeCharacters },
  searchText: 'as',
  characterType: characterTypes.ANIME,
}


it('should sort and filter characters', () => {
  const expected = [{
    id: '7323',
    name: 'Ashura',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:52:03.725Z',
    updatedAt: '2018-02-21T19:28:45.548Z',
    role: 'supporting',
  },
  {
    id: '22202',
    name: 'Hinata Asahi',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:57:31.492Z',
    updatedAt: '2018-02-21T19:23:04.392Z',
    role: 'supporting',
  },
  {
    id: '22203',
    name: 'Shirou Asou',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:57:31.496Z',
    updatedAt: '2018-02-21T19:24:49.181Z',
    role: 'supporting',
  }]

  expect(getCharacters(state)).toEqual(expected)
})

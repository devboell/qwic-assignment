import { extractCharacterData } from '../thunks'
import apiData from '../../test_data/fetch_anime.json'
import animeCharacters from '../../test_data/characters_anime'


it('should extract a list of characters from api fetch data', () => {
  expect(extractCharacterData(apiData)).toEqual(animeCharacters)
})

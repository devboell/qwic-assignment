import { extractCharacterData } from '../thunks'
import apiData from '../../test_data.json'


it('should extract a list of characters from api fetch data', () => {
  const expected = [{
    id: '10256',
    name: 'Mokona Modoki',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:53:11.256Z',
    updatedAt: '2018-02-21T19:29:59.120Z',
    role: 'main',
  },
  {
    id: '3554',
    name: 'Mokona Modoki',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:50:42.760Z',
    updatedAt: '2018-02-21T19:16:05.633Z',
    role: 'main',
  },
  {
    id: '3176',
    name: 'Sorata Arisugawa',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:50:34.744Z',
    updatedAt: '2017-01-22T11:51:45.961Z',
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
    id: '7323',
    name: 'Ashura',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:52:03.725Z',
    updatedAt: '2018-02-21T19:28:45.548Z',
    role: 'supporting',
  },
  {
    id: '22203',
    name: 'Shirou Asou',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:57:31.496Z',
    updatedAt: '2018-02-21T19:24:49.181Z',
    role: 'supporting',
  },
  {
    id: '1438',
    name: 'Chii ',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:49:55.588Z',
    updatedAt: '2018-02-21T19:22:36.346Z',
    role: 'supporting',
  },
  {
    id: '18521',
    name: 'Eri Chusonji',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:56:12.496Z',
    updatedAt: '2018-02-21T19:28:03.829Z',
    role: 'supporting',
  },
  {
    id: '4331',
    name: 'Tomoyo Daidouji',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:51:02.267Z',
    updatedAt: '2018-02-21T19:24:23.795Z',
    role: 'supporting',
  },
  {
    id: '10251',
    name: 'Shizuka Doumeki',
    type: 'animeCharacters',
    createdAt: '2013-02-20T18:53:11.106Z',
    updatedAt: '2017-01-22T09:38:57.126Z',
    role: 'supporting',
  }]

  expect(extractCharacterData(apiData)).toEqual(expected)
})
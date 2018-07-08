import { dateFormatter, characterTypeFormatter } from '../util/formatters'

export const characterTypes = {
  ANIME: 'anime',
  MANGA: 'manga',
}


export const characterInfo = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'type',
    label: 'Type',
    formatter: characterTypeFormatter,
  },
  {
    key: 'createdAt',
    label: 'Created At',
    formatter: dateFormatter,
  },
  {
    key: 'updatedAt',
    label: 'Updated At',
    formatter: dateFormatter,
  },
  {
    key: 'role',
    label: 'Role',
  },
]

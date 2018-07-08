
export const characterTypes = {
  ANIME: 'anime',
  MANGA: 'manga',
}

const dateFormatter = (str) => {
  const date = new Date(str)
  return date.toDateString()
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

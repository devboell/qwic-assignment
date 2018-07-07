import React from 'react'
import PropTypes from 'prop-types'
import { characterTypes } from '../App/constants'
import Button from './Button'


const Controls = ({ characterType, onSelectCharacterType }) => (
  <div>
    <Button
      type="button"
      isSelected={characterType === characterTypes.ANIME}
      onClick={() => onSelectCharacterType(characterTypes.ANIME)}
    >
      Anime
    </Button>
    <Button
      type="button"
      isSelected={characterType === characterTypes.MANGA}
      onClick={() => onSelectCharacterType(characterTypes.MANGA)}
    >
      Manga
    </Button>
  </div>
)

Controls.propTypes = {
  characterType: PropTypes.string.isRequired,
  onSelectCharacterType: PropTypes.func.isRequired,
}

export default Controls

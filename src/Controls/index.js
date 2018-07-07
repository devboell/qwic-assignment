import React from 'react'
import PropTypes from 'prop-types'
import { characterTypes } from '../App/constants'

const Controls = ({ onSelectCharacterType }) => (
  <div>
    <button
      type="button"
      onClick={() => onSelectCharacterType(characterTypes.ANIME)}
    >
      Anime
    </button>
    <button
      type="button"
      onClick={() => onSelectCharacterType(characterTypes.MANGA)}
    >
      Manga
    </button>
  </div>
)

Controls.propTypes = {
  onSelectCharacterType: PropTypes.func.isRequired,
}

export default Controls

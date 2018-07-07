import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from '../Table'
import { characterKeyLabels, characterTypes } from './constants'
import { fetchCharacters } from './thunks'
import { selectCharacterType } from './actions'
import { getCharacters } from './selectors'

class App extends Component {
  componentDidUpdate() {
    const {
      onFetchCharacters,
      characterType,
    } = this.props
    onFetchCharacters(characterType)
  }

  render() {
    const { characters, onSelectCharacterType } = this.props
    return (
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
        <Table
          data={characters}
          keyLabels={characterKeyLabels}
        />
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  characterType: PropTypes.string.isRequired,
  onFetchCharacters: PropTypes.func.isRequired,
  onSelectCharacterType: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  characterType: state.characterType,
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: type => dispatch(fetchCharacters(type)),
  onSelectCharacterType: type => dispatch(selectCharacterType(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

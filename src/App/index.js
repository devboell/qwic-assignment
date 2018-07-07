import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from '../Table'
import Controls from '../Controls'
import { characterKeyLabels } from './constants'
import { fetchCharacters } from './thunks'
import { selectCharacterType } from './actions'
import { getCharacters, getShouldFetch } from './selectors'

class App extends Component {
  componentDidUpdate() {
    const {
      shouldFetch,
      onFetchCharacters,
      characterType,
    } = this.props

    if (shouldFetch) onFetchCharacters(characterType)
  }

  render() {
    const {
      characters,
      characterType,
      isFetching,
      onSelectCharacterType,
    } = this.props
    return (
      <div>
        <Controls {...{ onSelectCharacterType, characterType }} />
        {isFetching
          ? <h4>Fetching data</h4>
          : <Table
            data={characters}
            keyLabels={characterKeyLabels}
          />
        }
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  characterType: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  shouldFetch: PropTypes.bool.isRequired,
  onFetchCharacters: PropTypes.func.isRequired,
  onSelectCharacterType: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  characterType: state.characterType,
  isFetching: state.isFetching,
  shouldFetch: getShouldFetch(state),
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: type => dispatch(fetchCharacters(type)),
  onSelectCharacterType: type => dispatch(selectCharacterType(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

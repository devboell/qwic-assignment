import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from '../Table'
import Controls from '../Controls'
import Search from '../Search'
import { characterKeyLabels } from './constants'
import { fetchCharacters } from './thunks'
import { selectCharacterType, updateSearch } from './actions'
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
      searchText,
      onSelectCharacterType,
      onUpdateSearch,
    } = this.props
    return (
      <div>
        <Controls {...{ onSelectCharacterType, characterType }} />
        <Search {...{ searchText, onUpdateSearch }} />
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
  searchText: PropTypes.string.isRequired,
  onFetchCharacters: PropTypes.func.isRequired,
  onSelectCharacterType: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  characterType: state.characterType,
  isFetching: state.isFetching,
  shouldFetch: getShouldFetch(state),
  searchText: state.searchText,
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: type => dispatch(fetchCharacters(type)),
  onSelectCharacterType: type => dispatch(selectCharacterType(type)),
  onUpdateSearch: text => dispatch(updateSearch(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

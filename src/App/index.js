import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from '../Table'
import { characterKeyLabels } from './constants'
import { fetchCharacters } from './thunks'
import { getCharacters } from './selectors'

class App extends Component {
  componentDidMount() {
    const {
      onFetchCharacters,
      characterType,
    } = this.props
    onFetchCharacters(characterType)
  }

  render() {
    const { characters } = this.props
    return (
      <Table
        data={characters}
        keyLabels={characterKeyLabels}
      />
    )
  }
}

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  characterType: PropTypes.string.isRequired,
  onFetchCharacters: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  characterType: state.characterType,
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: type => dispatch(fetchCharacters(type)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

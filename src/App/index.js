import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchCharacters } from './thunks'

class App extends Component {
  componentDidMount() {
    const { onFetchCharacters } = this.props
    onFetchCharacters()
  }

  render() {
    const { characters } = this.props
    return characters.map(chr => (
      <h1 key={chr.id}>
        {chr.id}
      </h1>))
  }
}

App.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onFetchCharacters: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  characters: state.characters,
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: () => dispatch(fetchCharacters()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

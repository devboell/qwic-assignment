import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCharacters } from './thunks'

class App extends Component {

  componentDidMount() {
    this.props.onFetchCharacters()
  }

  render() {
    const { characters } = this.props
    return characters.map(chr =>
      <h1 key={chr.id}>{chr.id}</h1>
    )
  }

}

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => ({
  onFetchCharacters: () => dispatch(fetchCharacters())
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App)

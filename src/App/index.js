import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {

  render() {

    return <h1>{this.props.test}</h1>
  }

}

const mapStateToProps = state => ({
  test: state.test
})
  
export default connect(mapStateToProps)(App)

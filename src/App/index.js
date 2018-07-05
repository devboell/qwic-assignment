import React from 'react'
import { connect } from 'react-redux'


const App = ({ test }) => <h1>{test}</h1>

const mapStateToProps = state => ({
  test: state.test
})
  
export default connect(mapStateToProps)(App)

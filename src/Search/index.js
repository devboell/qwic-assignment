import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Search = ({ searchText, onUpdateSearch }) => (
  <Wrapper>
    <input
      type="text"
      value={searchText}
      onChange={evt => onUpdateSearch(evt.target.value)}
    />
    <p>Search Name</p>
  </Wrapper>
)

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
}

export default Search

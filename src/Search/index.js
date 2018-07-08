import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchText, onUpdateSearch }) => (
  <div>
    <input
      type="text"
      value={searchText}
      onChange={evt => onUpdateSearch(evt.target.value)}
    />
  </div>
)

Search.propTypes = {
  searchText: PropTypes.string.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
}

export default Search

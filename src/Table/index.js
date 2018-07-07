import React from 'react'
import PropTypes from 'prop-types'

const Table = ({ data, keyLabels }) => (
  <table>
    <thead>
      <tr>
        {keyLabels.map(keyLabel => (
          <th key={keyLabel.key}>
            {keyLabel.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(chr => (
        <tr key={chr.id}>
          {keyLabels.map(keyLabel => (
            <td key={keyLabel.key}>
              {chr[keyLabel.key]}
            </td>
          ))}
        </tr>))
      }
    </tbody>
  </table>
)

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  keyLabels: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Table

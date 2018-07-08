import React from 'react'
import PropTypes from 'prop-types'

const tableCell = (val, formatter) => (
  formatter
    ? formatter(val)
    : val
)

const Table = ({ data, columnInfo }) => (
  <table>
    <thead>
      <tr>
        {columnInfo.map(info => (
          <th key={info.key}>
            {info.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          {columnInfo.map(info => (
            <td key={info.key}>
              {tableCell(item[info.key], info.formatter)}
            </td>
          ))}
        </tr>))
      }
    </tbody>
  </table>
)

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columnInfo: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Table

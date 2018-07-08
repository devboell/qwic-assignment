import React from 'react'
import PropTypes from 'prop-types'

import StyledTable from './StyledTable'

const tableCell = (val, formatter) => (
  formatter
    ? formatter(val)
    : val
)

const Table = ({ data, columnInfo }) => (
  <StyledTable>
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
  </StyledTable>
)

const columnInfoShape = PropTypes.shape({
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formatter: PropTypes.func,
})

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columnInfo: PropTypes.arrayOf(columnInfoShape).isRequired,
}

export default Table

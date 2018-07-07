import styled from 'styled-components'

const Button = styled.button`
  border: ${({ isSelected }) => (isSelected
    ? '2px solid orange'
    : '1px solid lightgray'
  )}
  outline: none;
  cursor: pointer;
`

export default Button

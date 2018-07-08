import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 20px;
  border: ${({ isSelected }) => (isSelected
    ? '2px solid orange'
    : '1px solid lightgray'
  )}
  outline: none;
  cursor: pointer;

  margin-right: 10px;
`

export default Button

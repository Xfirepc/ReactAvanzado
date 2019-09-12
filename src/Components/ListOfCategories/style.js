import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  padding: 0px;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar { width: 0 !important }
`

export const Item = styled.li`
 padding: 0 8px;
`

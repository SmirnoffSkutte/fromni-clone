import React from 'react'
import Table from 'react-bootstrap/Table';
type Props = {}

export default function ButtonItem(props:any) {
  const text=props.text
  const type=props.type
  const value=props.value
  const style=props.style
  return (
        <tr>
          <td>{text}</td>
          <td>{type}</td>
          <td>{value}</td>
          <td>{style}</td>
        </tr>
  )
}
import React from 'react'

export const Greet = (props) => {
  return (
    <div>Hello {props.name ? props.name : "Guest"}</div>
  )
}

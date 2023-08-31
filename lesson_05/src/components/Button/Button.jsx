import React from 'react'

export default function Button({title, actionOnClick}) {
  return (
    <button onClick={actionOnClick}>{title}</button>
  )
}

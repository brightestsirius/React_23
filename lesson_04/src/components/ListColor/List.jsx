import React from 'react'

export default function List({list, color}) {
  return (
    <ul style={{color}}>
        {list.map((item,index) => <li key={index}>{item}</li>)}
    </ul>
  )
}

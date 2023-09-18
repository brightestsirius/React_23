import React from 'react'
import './style.sass'

import {NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="todo">Todo</NavLink>
        </li>
      </ul>
    </nav>
  )
}
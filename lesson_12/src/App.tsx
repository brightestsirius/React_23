import React from 'react'

import Todos from './components/Todos/Todos'
import Accordion from './components/Accordion/Accordion'

export default function App() {
  return (
    <div data-testid="app">
      <Todos />
      <Accordion title='Testing'><h4>Content</h4></Accordion>
    </div>
  )
}
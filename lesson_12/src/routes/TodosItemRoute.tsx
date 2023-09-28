import React from 'react'
import {useSearchParams} from 'react-router-dom'

import Accordion from '../components/Accordion/Accordion'

export default function TodosItemRoute() {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get(`id`), searchParams.get(`completed`));

  return (
    <div>
      <h3>Todos Item Route</h3>
      <Accordion title='Testing'><h4>Content</h4></Accordion>
    </div>
  )
}
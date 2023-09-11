import React, {useContext} from 'react'

import ListFilterContext from '../../contexts/ListFilterContext';

export default function TodoFilter() {

  const {filter, setFilter} = useContext(ListFilterContext);

  return (
    <div className='wrapper'>
      <select defaultValue={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="non-completed">non-completed</option>
      </select>
    </div>
  )
}

import React, {useContext} from 'react'

import ListColorContext from '../../contexts/ListColorContext'

export default function TodoColorPicker() {

  const {color, setColor} = useContext(ListColorContext);

  return (
    <div className='wrapper'>
      <input type="color" defaultValue={color} onChange={e => setColor(e.target.value)} />
    </div>
  )
}

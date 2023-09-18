import React from 'react'

import {useSelector} from 'react-redux'

export default function CounterData() {
  const counter = useSelector(store => store.counter)

  return (
    <h3 align="center">CounterData: {counter}</h3>
  )
}

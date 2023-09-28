import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'

import TodosRoute from './routes/TodosRoute';
import TodosItemRoute from './routes/TodosItemRoute'

export default function App() {
  return (
    <Routes>
      <Route index path={"/"} element={<TodosRoute />}></Route>
      <Route path={"/todo"} element={<TodosItemRoute />}></Route>
    </Routes>
  )
}
import React from "react";

import Navigation from "./../components/Navigation/Navigation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteHome from "./../routes/RouteHome";
import RouteTodo from "./../routes/RouteTodo";
import RouteTodoItem from "./../routes/RouteTodoItem";

import useTodo from "./../hooks/useTodo";

import TodoContext from "../contexts/TodoContext";

export default function Layout() {
  const todo = useTodo();

  return (
    <BrowserRouter>
      <header>
        <Navigation />
      </header>
      <main>
        <TodoContext.Provider value={todo}>
          <Routes>
            <Route index path={"/"} element={<RouteHome />}></Route>
            <Route path={"todo"} element={<RouteTodo />}></Route>
            <Route path={"todo/:id"} element={<RouteTodoItem />}></Route>
          </Routes>
        </TodoContext.Provider>
      </main>
    </BrowserRouter>
  );
}

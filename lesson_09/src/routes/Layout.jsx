import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./../components/Navigation/Navigation";

import RouteHome from "./RouteHome";
import RouteTodo from "./RouteTodo";
import RouteTodoItem from "./RouteTodoItem";

import todoContext from "../contexts/todoContext";

import useTodo from "../hooks/useTodo";

export default function Layout() {
  const todo = useTodo();

  return (
    <todoContext.Provider value={todo}>
      <BrowserRouter>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route index path={"/"} element={<RouteHome />}></Route>
            <Route path={"/todo"} element={<RouteTodo />}></Route>
            <Route path={"/todo/:todoId"} element={<RouteTodoItem />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </todoContext.Provider>
  );
}

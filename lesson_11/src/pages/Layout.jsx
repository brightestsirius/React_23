import React from "react";

import { Routes, Route } from "react-router-dom";

import DashboardRoute from "./../routes/DashboardRoute";
import TodosItemRoute from "./../routes/TodosItemRoute";

export default function Layout() {
  return (
    <Routes>
      <Route index path={"/"} element={<DashboardRoute />}></Route>
      <Route path={"/:id"} element={<TodosItemRoute />}></Route>
    </Routes>
  );
}

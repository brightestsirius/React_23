import React from "react";

import RouteHome from "./RouteHome";
import RoutePosts from "./RoutePosts";
import RoutePost from "./RoutePost";
import RoutePostUser from "./RoutePostUser";
import RouteUsers from "./RouteUsers";
import RouteNotFound from "./RouteNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./../pages/Header";
import Main from "./../pages/Main";
import Footer from "./../pages/Footer";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<RouteHome />}></Route>
          <Route path="posts" element={<RoutePosts />}></Route>
          <Route path="posts/:postId" element={<RoutePost />}></Route>
          <Route
            path="posts/:postId/:userId"
            element={<RoutePostUser />}
          ></Route>
          <Route path="users" element={<RouteUsers />}></Route>
          <Route path="*" element={<RouteNotFound />}></Route>
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
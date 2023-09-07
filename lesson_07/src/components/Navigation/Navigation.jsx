import React from "react";
import { NavLink } from "react-router-dom";

import "./style.sass"

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink style={(obj) => {
            return {fontStyle: "italic", fontWeight: obj.isActive && `bold`}
          }} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="posts?filter=ASC&color=green">Posts</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
}
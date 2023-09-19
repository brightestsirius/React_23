import React from "react";
import "./style.sass";

import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Navigation() {
  const countries = useSelector(store => store.countries);
  console.log(countries);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

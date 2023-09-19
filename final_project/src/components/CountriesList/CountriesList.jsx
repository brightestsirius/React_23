import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { actionCountryDelete } from "./../../store/actions";

export default function CountriesList() {
  const countries = useSelector((store) => store.countries);
  const dispatch = useDispatch();

  const handleItemDelete = (name) => dispatch(actionCountryDelete(name));

  return (
    <div className="component">
      <h3>Countries List</h3>
      {countries.length ? (
        <ul>
          {countries.map((country, index) => (
            <li key={index}>
              <Link to={country.name.official}>
                {country.flag} {country.name.official}
              </Link>{" "}
              <button onClick={() => handleItemDelete(country.name.official)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

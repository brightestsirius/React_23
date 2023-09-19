import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { renderObjectList } from "../../common/common";

import { useSearchParams, useNavigate } from "react-router-dom";

import { actionCountryDelete } from "../../store/actions";

export default function CountryCard() {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [searchParams] = useSearchParams();
  const searchParamTranslation = searchParams.get(`translation`);

  const { country: countryParam } = useParams();

  const countries = useSelector((state) => state.countries);
  const country = countries.find((item) => item.name.official === countryParam);

  const handleCountryDelete = (name) => {
    dispatch(actionCountryDelete(name));
    navigation("/countries");
  };

  return (
    <div className="component">
      <h3>
        {searchParamTranslation
          ? country.translations[searchParamTranslation].official
          : country.name.official}
      </h3>
      {country ? renderObjectList(country) : null}
      <button onClick={() => handleCountryDelete(country.name.official)}>
        Delete country
      </button>
    </div>
  );
}

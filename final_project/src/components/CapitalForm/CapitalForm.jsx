import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.sass";

export default function CapitalForm() {
  const navigation = useNavigate();

  const countries = useSelector((store) => store.countries);
  const [translations, setTranslations] = useState(
    countries.length ? Object.keys(countries[0].translations) : []
  );

  const [country, setCountry] = useState(
    countries[0] ? countries[0].name.official : {}
  );
  const [translation, setTranslation] = useState(translations[0]);

  const handleSelectCapital = (e) => {
    setCountry(e.target.value);
    let countryTranslations = countries.find(
      (country) => country.name.official === e.target.value
    ).translations;
    setTranslations(Object.keys(countryTranslations));
    setTranslation(Object.keys(countryTranslations)[0]);
  };

  const handleSelectTranslation = (e) => setTranslation(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/countries/${country}?translation=${translation}`);
  };

  return countries.length ? (
    <div className="component">
      <h3>Capital Form Component</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Select Capital</h4>
          <select defaultValue={country} onChange={handleSelectCapital}>
            {countries.map((country, index) => (
              <option key={index} value={country.name.official}>
                {country.flag} {country.capital[0]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h4>Select Translation</h4>
          <select defaultValue={translation} onChange={handleSelectTranslation}>
            {translations.map((key, index) => (
              <option key={index} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
        <button>Read more about {country}</button>
      </form>
    </div>
  ) : null;
}

import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import BackButton from "./../components/BackButton/BackButton";

export default function RouteCountry() {
  return (
    <>
      <CountryCard />
      <BackButton path={"/countries"} text={"Back to Countries"} />
    </>
  );
}

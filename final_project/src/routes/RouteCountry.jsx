import React from "react";
import Country from "./../components/Country/Country";
import BackButton from './../components/BackButton/BackButton'

export default function RouteCountry() {
  return (
    <>
      <Country />
      <BackButton path={"/countries"} text={"Back to Countries"} />
    </>
  );
}

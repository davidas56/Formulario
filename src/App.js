import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Select, MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });
  const cambiarNombre = (e) => {
    const value = e.target.value;
    console.log(value);
    setNombre(value);
  };

  const guardarClick = () => {
    console.log("Esta es mi estdo local: ", nombre);
  };

  return (
    <div className="mi_formulario__container">
      <div className="mi_formulario__header">
        <h1 className="mi_formulario__title">FORMULARIO</h1>
      </div>
      <div className="mi_formulario__body">
        <div className="mi_formulario__form">
          <label className="mi_formulario__Label2">Nombre Completo: </label>
          <i className="fa fa-user" aria-hidden="true"/>
          <input
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={cambiarNombre}
            className="mi_formulario__input"
          ></input>
        </div>
        <div className="mi_formulario__pais">
          <label classname="mi_formulario__label1">Pais De Residencia</label>
        <Select Classname="mi_formulario__Select"
        value={selectedCountry}
        onChange={(e) => selectCountryHandler(e.target.value)}
      >
        {!!countryArr?.length &&
          countryArr.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
      </Select>
        </div>
        <div className="mi_formulario__button">
        <button onClick={guardarClick} className="mi_formulario__button1">
            Guardar
          </button>
        </div>
      </div>

      <div className="mi_formulario__footer">
        <div className="mi_formulario__group">
          <span className="mi_formulario__label">
          </span>
        </div>
      </div>
    </div>
  );
};
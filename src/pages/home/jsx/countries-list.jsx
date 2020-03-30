import React, { useEffect } from "react";
import "../scss/list.scss";
import CountryItem from "./country-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CountriesList = ({ countries = [] }) => {
  const [content, setContent] = React.useState(countries);
  const [filterTextValue, setFilterTextValue] = React.useState("");
  const [orderByValue, setOrderByValue] = React.useState("");
  const [sortValue, setSortValue] = React.useState("DESC");

  const filterText = event => {
    let text = event.target.value;
    let newContries = countries.filter(country => !!!country.name.indexOf(text));
    orderBy(null, sortValue, newContries);
    setFilterTextValue(text);
  };

  const orderBy = (event, sort = sortValue, newContent) => {
    let option = event ? event.target.value : orderByValue;
    let sortCheck = sort !== sortValue ? sort : sortValue;
    let list = newContent ? newContent : content;
    console.log(option, sort, sortValue, sortCheck);
    if (option) {
      let newContries = list.sort((a, b) => {
        if (a[option] < b[option]) {
          return sortCheck === "DESC" ? 1 : -1;
        }
        if (a[option] > b[option]) {
          return sortCheck === "DESC" ? -1 : 1;
        }
        // a must be equal to b
        return 0;
      });
      setContent(newContries);
    } else{
      setContent(list);
    }
    if (event) setOrderByValue(option);
    if (sort) setSortValue(sort);
  };

  const setSort = () => {
    let sort = sortValue === "DESC" ? "ASC" : "DESC";
    orderBy(null, sort);
  };

  return (
    <article className="countries-background">
      <div className="countries-list">
        <form className="filter">
          <input
            type="text"
            onChange={filterText}
            value={filterTextValue}
            placeholder="Filtrar por nombre"
          />
          <select onChange={orderBy} value={orderByValue}>
            <option value="">Seleccione:</option>
            <option value="cases">por Casos</option>
            <option value="recovereds">por Recuperados</option>
            <option value="critical">por Criticos</option>
            <option value="deaths">por Fallecidos</option>
          </select>
          {orderByValue && (
            <button type="button" onClick={setSort} value={sortValue}>
              {sortValue === "DESC" ? (
                <FontAwesomeIcon
                  icon={{ prefix: "fas", iconName: "sort-amount-down" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={{ prefix: "fas", iconName: "sort-amount-up" }}
                />
              )}
            </button>
          )}
        </form>
        <div className="legend">
          <span id="cases">Casos</span>
          <span id="recovereds">Recuperados</span>
          <span id="critical">Criticos</span>
          <span id="deaths">Fallecidos</span>
        </div>
        <div className="list">
          {content.map((country, key) => (
            <CountryItem key={key} country={country} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default CountriesList;

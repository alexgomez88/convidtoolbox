import React from 'react';
import '../scss/item.scss';

export default function CountryItem({country}) {

  const {name = 'test', cases = 0, deaths = 0, recovereds = 0, critical = 0} = country;
  const locale = 'de-DE';

  return (
    <div className="country-item-list">
      <h1 id="title">{name}</h1>
      <div id="cases">
        <span className="symbold" />
        <span className="text">{cases.toLocaleString(locale)}</span>
      </div>
      <div id="recovereds">
        <span className="symbold" />
        <span className="text">{recovereds.toLocaleString(locale)}</span>
      </div>
      <div id="critical">
        <span className="symbold" />
        <span className="text">{critical.toLocaleString(locale)}</span>
      </div>
      <div id="deaths">
        <span className="symbold" />
        <span className="text">{deaths.toLocaleString(locale)}</span>
      </div>
    </div>
  );
}

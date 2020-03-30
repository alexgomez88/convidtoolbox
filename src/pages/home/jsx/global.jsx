import React from "react";
import "../scss/global.scss";

const GlobalCases = ({ resume }) => {

  const {cases, deaths, critical, recovereds} = resume;

  return (
    <article className="global-section">
      <div id="cases">
        <span className="title">Total de casos:</span>
        <span>{cases.toLocaleString()}</span>
      </div>
      <div id="recovereds" className="lower">
        <span className="title">Recuperados:</span>
        <span>{recovereds.toLocaleString()}</span>
      </div>
      <div id="deaths" className="lower">
        <span className="title">Fallecidos:</span>
        <span>{deaths.toLocaleString()}</span>
      </div>
      <div id="criticals" className="lower">
        <span className="title">Criticos:</span>
        <span>{critical.toLocaleString()}</span>
      </div>
    </article>
  );
};

export default GlobalCases;

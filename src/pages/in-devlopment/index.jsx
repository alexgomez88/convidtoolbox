import React from "react";
import "./style.scss";

const InDevelopment = () => (
  <section className="page dev-page">
    <h1>En Construcción</h1>
    <p>Próximamente podrás contar con nuevos recursos, tales como:</p>
    <ul>
      <li>
        <strong>Tips:</strong> Recursos científicamente validados, o certificados por la
        OMS, para prevenir Convid-19.
      </li>
      <li>
        <strong>Consulta un Medico:</strong> Nuestro Dr. Jose Rafael Romero
        contestará sus preguntas sobre el Convid-19.
      </li>
      <li>
        <strong>Historicos de cada pais:</strong> Consultar la evolución de la
        propagación del virus en cada país.
      </li>
    </ul>
  </section>
);

export default InDevelopment;

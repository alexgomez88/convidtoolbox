import React from "react";
import Controller from "./js/controller";
import Actions from "./js/actions";
import useController from "./js/hook";

import GlobalCases from "./jsx/global";
import CountriesList from "./jsx/countries-list";

import './scss/style.scss';
import Loading from "../../components/loading";

const homeController = new Controller();

const Home = () => {
  const state = useController(homeController);
  const actions = new Actions(homeController);

  console.log(state);

  if (!state.ready) return <Loading/>;

  return (
    <section className="page home-page">
      <GlobalCases resume={state.model.resume}/>
      <CountriesList countries={state.model.countries}/>
    </section>
  );
};

export default Home;

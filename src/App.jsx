import React from "react";
import "./main.scss";
import {
  Router,
  createMemorySource,
  createHistory,
  LocationProvider
} from "@reach/router";
import Menu from "./components/menu";
import Home from "./pages/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import About from "./pages/about";
import InDevelopment from "./pages/in-devlopment";

library.add(fas);

let source = createMemorySource("/");
let history = createHistory(source);

let Dash = () => <div className="page">Dash</div>;

const App = () => (
  <LocationProvider history={history}>
    <main>
      <div className="base-body">
        <Router className="router">
          <Home path="/" />
          <InDevelopment path="/tips" />
          <InDevelopment path="/doctor" />
          <About path="about" />
        </Router>
      </div>
      <Menu />
    </main>
  </LocationProvider>
);

export default App;

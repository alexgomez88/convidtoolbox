import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';


if (window.cordova) {
  document.addEventListener("deviceready", () => {
    initApp();
  }, false);
} else {
  initApp();
}

function initApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
};
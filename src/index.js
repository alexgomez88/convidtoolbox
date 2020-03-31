import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';


if (window.cordova) {
  document.addEventListener("deviceready", () => {
    admob.banner.config({
      id: 'ca-app-pub-7611014775630061/1946562091',
      isTesting: false,
      autoShow: true
    });
    admob.banner.prepare();

    admob.interstitial.config({
      id: 'ca-app-pub-7611014775630061/6544282657',
      isTesting: false,
      autoShow: true
    });
    admob.interstitial.prepare();

    initApp();
  }, false);
} else {
  initApp();
}

function initApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}
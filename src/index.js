import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';


if (window.cordova) {
  document.addEventListener("deviceready", () => {
    window.plugins.AdMob.setOptions({
      publisherId: "ca-app-pub-7611014775630061/1946562091",  // Required
      interstitialAdId: "ca-app-pub-7611014775630061/6544282657",  // Optional
      //tappxIdiOS: "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
      //tappxIdAndroid: "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
      //tappxShare: 0.5                                        // Optional
    });

    window.plugins.AdMob.createBannerView({
      autoShowBanner: false
    });

    initApp();
  }, false);
} else {
  initApp();
}

function initApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
};
export default function Model() {

  let countries, resume = {};
  let fetching = true, ready;
  let filterText;
  let triggerChange;

  Object.defineProperty(this, 'ready', { 'get': () => ready })
  Object.defineProperty(this, 'getters', {
    'get': () => ({
      'countries': countries,
      'resume': { ...resume },
      'fetching': fetching
    })
  });

  this.getData = async () => {
    fetching = true;
    triggerChange();

    let response = await fetch('http://convidtoolbox.globalmaikan.com.ve/api/data');
    let answer = await response.json();
    
    countries = answer.data.countries;
    resume = {
      'cases': answer.data.cases,
      'deaths': answer.data.deaths,
      'recovereds': answer.data.recovereds,
      'critical': answer.data.critical
    }

    fetching = false;
    ready = true;
    triggerChange();

  }

  this.registerListener = (callback) => triggerChange = callback;

}
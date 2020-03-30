import Model from './model';

export default function Controller() {

  let change, model, looptask;
  let filterText

  Object.defineProperty(this, 'state', {
    'get': () => ({
      'ready': model && model.ready,
      'model': model && model.getters,
      'fetching': model && model.getters.fetching
    })
  });

  const triggerChange = () => { if (typeof change === 'function') change(this.state) };

  this.init = () => {
    model = new Model();
    model.registerListener(triggerChange);
    model.getData();

    looptask = setInterval(() => model.getData(), 60000)
    triggerChange();
  };

  this.setListener = (callback) => change = callback;
  
  this.unSetListener = () => change = undefined;
}
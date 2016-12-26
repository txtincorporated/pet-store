import template from './stores.html';

export default {
  template,
  controller
};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  stores.get().then(stores => {
    this.stores = stores;
    console.log('stores in stores: ', stores);
  });
}
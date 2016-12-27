import template from './stores.html';

export default {
  template,
  controller
};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  console.log('IN STORES');
  stores.get().then(stores => {
    this.stores = stores;
    console.log('stores in stores: ', stores);
  });
}
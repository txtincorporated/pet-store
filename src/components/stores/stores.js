import template from './stores.html';

export default {
  template,
  controller
};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  stores.get();
  this.$onInit = () => {
    stores.get().then(stores => {
      this.stores = stores;
    });
  };
}
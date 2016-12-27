import template from './stores-store.html';

export default {
  template,
  bindings: {
    id: '<'
  },
  controller

};

controller.inject = [ 'storesService' ];

function controller(stores) {
  console.log('stores.store, getStore: ', this.id);
  this.$onInit = () => {
    stores.get(this.id)
    .then(store => {
      this.store = store;
    });

  };
}
import template from './stores-store.html';

export default {
  template,
  bindings: {
    id: '<',
    store: '<'
  },
  controller

};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  this.$onInit = () => {
    stores.get(this.id)
    .then(store => {
      this.store = store;
    });

  };
}
import template from './stores.html';

export default {
  template,
  bindings: {
    id: '<'
  },
  controller
};

controller.$inject = [ 'storesService', '$state' ];

function controller(stores, $state) {
  console.log( 'IN STORES' );

  this.seeStore = (id) => {
    console.log( 'seeStore called, id: ', id ) ;
    $state.go( 'stores.store' );
  };

  this.$onInit = () => {
    stores.getStores().then(stores => {
      this.stores = stores;
      console.log( 'stores in stores: ', stores );

    });
  };
}
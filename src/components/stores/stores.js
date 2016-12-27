import template from './stores.html';

export default {
  template,
  controller
};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  console.log( 'IN STORES' );

  // this.seeStore = (id) => {
  //   console.log( 'seeStore called, id: ', id ) ;
  //   $state.go( 'stores.store' );
  // };

  this.$onInit = () => {
    stores.get().then(stores => {
      this.stores = stores;
      console.log( 'stores in stores: ', stores );

    });
  };
}
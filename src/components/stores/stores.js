import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  controller
};

controller.$inject = [ 'storesService', '$state' ];

function controller(stores) {
  this.styles = styles;
  
  console.log( 'IN STORES' );

  this.$onInit = () => {
    stores.get().then(stores => {
      this.stores = stores;
      console.log( 'stores in stores: ', stores );

    });
  };

  this.add = (store, $state) => {
    stores.add( store )
    .then(saved => {
      this.stores.push( saved );
    })
    .then($state.go('stores.store( {id: saved._id} )'));
  };

}
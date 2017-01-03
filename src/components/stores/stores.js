import template from './stores.html';
import styles from './stores.scss';

export default {
  template,
  bindings: {
    stores: '<'
  },
  controller
};

controller.$inject = [ 'storesService', '$state' ];

function controller(stores, $state) {
  this.styles = styles;
  
  this.$onInit = () => {
  };

  this.add = (store) => {
    stores.add( store )
    .then(saved => {
      this.stores.push( saved );
      $state.go('stores.store', { id: saved._id });

    });
  };

  this.cancel = () => {
    $state.go( 'stores', {}, { location: 'replace', inherit: false, reload: true } );

  };
}
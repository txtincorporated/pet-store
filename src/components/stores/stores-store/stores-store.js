import template from './stores-store.html';

export default {
  template,
  bindings: {
    id: '<',
    store: '<',
    pets: '<'
  },
  controller

};

controller.$inject = [ 'storesService', 'petService', '$state' ];

function controller(stores, pets, $state) {
  this.$onInit = () => {
    console.log('this.id: ', this.id);
    stores.get(this.id)
    .then(store => {
      this.store = store;
      console.log('store in stores-store: ', this.store);
    });

    this.addPet = (pet) => {
      pets.add( pet )
      .then(() => {
        $state.go('stores');

      })
      .then(() => {
        $state.go('stores.store', { id: this.store._id });

      });
    };

    this.cancel = () => {
      $state.reload('stores.store', { id: this.store._id });

    };
  };
}
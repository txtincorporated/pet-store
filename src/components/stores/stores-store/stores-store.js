import template from './stores-store.html';

export default {
  template,
  bindings: {
    id: '<',
    store: '<'
  },
  controller

};

controller.$inject = [ /*'petService', */'storesService', '$state' ];

function controller(stores) {
  this.$onInit = () => {
    console.log('this.id: ', this.id);
    stores.get(this.id)
    .then(store => {
      this.store = store;
      console.log('store in stores-store: ', this.store);
    });

    this.addPet = (store, pet, petService, $state) => {
      petService.add( store, pet )
      .then(() => {
        $state.go('stores.store', { id: store._id });

      });
    };
  };
}
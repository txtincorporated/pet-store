import template from './stores-add.html';

export default {
  template,
  bindings: {
    address: '<'
  },
  controller

};

controller.$inject = [ 'storesService' ];

function controller(stores) {
  this.add = store => {
    stores.add( store )
    .then(saved => {
      this.stores.push( saved );

    });
  };
}

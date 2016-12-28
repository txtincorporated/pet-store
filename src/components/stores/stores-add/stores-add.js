import template from './stores-add.html';

export default {
  template,
  bindings: {
    add: '='
  },
  controller

};

controller.$inject = [ 'storesService' ];

function controller() {

  this.reset = () => {
    this.name = '';
    this.street = '';
    this.city = '';

  };

  this.reset();

  this.addStore = () => {
    this.add({
      name: this.address.name, 
      street: this.address.street,
      city: this.address.city

    });
  };

  this.reset();  

}

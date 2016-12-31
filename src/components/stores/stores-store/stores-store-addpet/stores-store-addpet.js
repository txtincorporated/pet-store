import template from './stores-store-addpet.html';

export default {
  template,
  bindings: {
    pets: '<'
  },
  require: {
    parent: '^storesStore'
  },
  controller

};

controller.$inject = [ 'petService' ];

function controller(parent) {
  console.log('IN ADD PETS');
  this.reset = () => {
    this.name = '';
    this.animal = '';

  };

  this.reset();

  this.addpet = () => {
    parent.addPet({
      name: this.name, 
      animal: this.animal 
    });
  };
}

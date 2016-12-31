import template from './stores-addpet.html';

export default {
  template,
  bindings: {
    pets: '<',
    addPet: '<'
  },
  require: {
    parent: '^storesStore'
  },
  controller

};

controller.$inject = [ 'petService' ];

function controller() {
  console.log('IN ADD PETS');
  this.reset = () => {
    this.name = '';
    this.animal = '';

  };

  this.reset();

  this.addpet = () => {
    this.parent.addPet({
      name: this.name, 
      animal: this.animal 
    });
  };
}

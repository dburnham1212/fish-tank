class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
    this.isTasty = false;
    this.biteDistance = 40;
  }

  updateOneTick() {
    super.updateOneTick();
    // FOR LOOP TO CHECK IF A FISH IS TASTY AND WITHIN A CERTAIN DISTANCE IF SO EAT IT
    for (var id in this.tank.denizens) {
      let distance = Math.sqrt(Math.pow((this.tank.denizens[id].position.x - this.position.x), 2)  + Math.pow((this.tank.denizens[id].position.y - this.position.y), 2));
      if (this.tank.denizens[id].isTasty && distance < this.biteDistance) {
        this.tank.denizens[id].kill();
      }
    }
  }

}


class Shark extends BiteFish {
  constructor(options) {
    super(options); // Call super to run the code inside `BiteFish`'s constructor
    this.imageUri = '/images/shark.png'; // Set the image
    this.biteDistance = 100;
    this.height = 200;
    this.width = 200;
  }

  updateOneTick() {
    super.updateOneTick();
  }

}

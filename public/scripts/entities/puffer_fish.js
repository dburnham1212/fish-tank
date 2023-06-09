class PufferFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/puffer-fish.png'; // Set the image
  }

  onClick(event) {
    this.kill();
  }
}


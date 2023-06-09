class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/silly-fish.png';
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}

import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Loading' })
  }

  preload () {
    this.load.image('hummingbird', 'assets/images/hummingbird_PNG90.png')
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('manyMushrooms', 'assets/images/Mushroom-PNG-Picture.png')
    this.load.image('grassyField', 'assets/images/nature-8608.png')

    this.load.spritesheet('healthMeter', 'assets/images/New Piskel.png', {frameWidth: 120, frameHeight: 120})
    this.load.spritesheet('birdPet', 'assets/images/bird-sprite.png', {frameWidth: 600, frameHeight: 452})
  }

  create () {
    this.scene.start('HomePage')
  }

  update () {}
}

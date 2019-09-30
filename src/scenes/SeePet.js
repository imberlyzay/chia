import Phaser from 'phaser'
import MyPet from '../sprites/MyPet'

export default class SeePet extends Phaser.Scene {
  constructor() {
    super({key: 'SeePet'})
  }
  init() {
    this.birdPet;
    this.healthMeter;
  }

  preload() {
    this.scene.manager.keys.HomePage.bird.visible = false
    this.scene.manager.keys.HomePage.mushroom.visible = false
  }

  create () {
    this.add.image(450, 450, 'grassyField')
    this.add.image(window.innerWidth * window.devicePixelRatio, window.innerHeight, 'grassyField')
    this.add.image(0, window.innerHeight, 'grassyField')

    this.add.text(450, 105, 'Health', {
      fill: '#FFC300'
    })
    this.healthMeter = this.add.sprite(600, 123, 'healthMeter', 0)
    this.healthMeter.setScale(2)
    this.birdPet = this.add.sprite(950, 500, 'birdPet', 0)

    this.anims.create({
      key: 'flap',
      repeat: 10,
      frames: this.anims.generateFrameNumbers('birdPet', {start: 0, end: 1}),
      frameRate: 5
    })
  }

  update () {
    if (this.input.activePointer.isDown) {
      this.birdPet.anims.play('flap')
    } else {
      //this.birdPet.anims.stop('flap wings')
    }
  }
}

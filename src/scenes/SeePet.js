import Phaser from 'phaser'
import MyPet from '../sprites/MyPet'
import { white } from 'color-name';

const startDate = new Date ();
const getHealthMeterColor = (date) => {
  const colors = {
    healthy: 0x000000,
    middling: 0xff300,
    sick: 0xffffff
  }
  if (date.getUTCMinutes() < 60) return colors.healthy;
  if (date.getUTCMinutes() < 600) return colors.middling;
  else return colors.sick;
}

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

    const healthMeterText = this.add.text(450, 105, 'Health', {
      fill: '#FFC300'
    })
    // this.healthMeter = this.add.sprite(600, 123, 'healthMeter', 0)
    // this.healthMeter.setScale(2)
    //this.birdPet = this.add.sprite(950, 500, 'birdPet', 0)


    this.healthMeter = this.add.rectangle(healthMeterText.x + 120, healthMeterText.y + 5, 100, 20, getHealthMeterColor(startDate))
    this.birdPet = new MyPet({scene: this, x: 950, y: 500, asset: 'birdPet'})
    this.add.existing(this.birdPet)


    console.log(this.birdPet)
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

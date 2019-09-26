/* globals __DEV__ */
import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'
import Hummingbird from '../sprites/Hummingbird'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {
    this.playerSpeed = 7;
    this.currentPlayer;
  }
  preload () {}

  create () {
    this.mushroom = new Mushroom({
      scene: this,
      x: 400,
      y: 300,
      asset: 'mushroom'
    })
    this.bird = new Hummingbird({
      scene: this,
      x: 200,
      y: 200,
      asset: 'hummingbird'
    })

    this.add.existing(this.mushroom)
    this.add.existing(this.bird)
    this.add.text(300, 100, 'Chia ', {
      font: '64px Marck Script',
      fill: '#9CCC65'
    })
  }
  update () {

    if (this.input.activePointer.isDown) {
      if (this.mushroom.x < this.input.x) {
        this.mushroom.x += this.playerSpeed;
      }
      else if (this.mushroom.x > this.input.x) {
        this.mushroom.x -= this.playerSpeed;
      }
      if (this.mushroom.y < this.input.y) {
        this.mushroom.y += this.playerSpeed;
      }
      else if (this.mushroom.y > this.input.y) {
        this.mushroom.y -= this.playerSpeed;
      }
    }
  }
}

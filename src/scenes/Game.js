/* globals __DEV__ */
import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {}
  preload () {}

  create () {
    this.mushroom = new Mushroom({
      scene: this,
      x: 400,
      y: 300,
      asset: 'mushroom'
    })

    this.add.existing(this.mushroom)
    this.add.text(400, 100, 'Chia ', {
      font: '64px Bangers',
      fill: '#7744ff'
    })

  }
}

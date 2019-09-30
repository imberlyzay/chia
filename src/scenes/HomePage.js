import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'
import Hummingbird from '../sprites/Hummingbird'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'HomePage' })
  }

  init () {
    this.playerSpeed = 3;
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
      x: 730,
      y: 200,
      asset: 'hummingbird'
    })


    this.add.image(230, 900, 'manyMushrooms')
    this.add.text(900, 70, 'Chia ', {
      fill: '#FFC300',
      font: '64px'
    })
    this.add.existing(this.bird)
    this.add.existing(this.mushroom)
  }

  update () {
    if (this.input.x > this.mushroom.x) {
      this.mushroom.x += this.playerSpeed
    }
    else if (this.input.x < this.mushroom.x) {
      this.mushroom.x -= this.playerSpeed
    }
    else if (this.input.x == this.mushroom.x) {
      this.mushroom.x = this.mushroom.x
    }

    if (this.mushroom.y < this.input.y) {
      this.mushroom.y += this.playerSpeed
    }
    else if (this.mushroom.y > this.input.y) {
      this.mushroom.y -= this.playerSpeed
    }
    else if (this.mushroom == this.input.y) {
      this.mushroom.y = this.mushroom.y
    }
  }
}

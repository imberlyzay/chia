import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    this.load.image('hummingbird', 'assets/images/hummingbird_PNG90.png')
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}

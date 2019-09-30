import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'StartingPage' })
  }

  preload () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.add.text(100, 100, 'loading fonts...', {fill : '#9CCC65'})

    WebFont.load({
      google: {
        families: ['Bangers', 'Marck Script']
      },
      active: this.fontsLoaded
    })
  }

  update () {
    if (this.fontsReady) {
      this.scene.start('SeePetsButton')
      this.scene.start('Loading')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}

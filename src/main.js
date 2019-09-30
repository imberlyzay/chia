import Phaser from 'phaser'

import StartingPage from './scenes/StartingPage'
import Loading from './scenes/Loading'
import HomePage from './scenes/HomePage'
import SeePetsButton from './scenes/SeePetsButton'
import SeePet from './scenes/SeePet'

import config from './config'

const gameConfig = Object.assign(config, {
  scene: [StartingPage, Loading, HomePage, SeePetsButton, SeePet]
})

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig)
  }
}

window.game = new Game()

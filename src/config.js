import Phaser from 'phaser'

export default {
  type: Phaser.CANVAS,
  parent: 'content',

  backgroundColor: '#9CCC65',
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  localStorageName: 'chia'
}

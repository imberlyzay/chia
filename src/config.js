import Phaser from 'phaser'

export default {
  type: Phaser.CANVAS,
  parent: 'content',

  backgroundColor: '#FCF3CF',
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  localStorageName: 'phaseres6webpack'
}

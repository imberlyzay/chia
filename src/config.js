import Phaser from 'phaser'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  // width: 800,
  // height: 600,
  localStorageName: 'phaseres6webpack'
}

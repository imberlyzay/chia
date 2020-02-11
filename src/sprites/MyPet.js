import Phaser from 'phaser'

export default class MyPet extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y, asset }) {
    super(scene, x, y, asset)
    this.age = 0;
    this.health = 100;
  }
}

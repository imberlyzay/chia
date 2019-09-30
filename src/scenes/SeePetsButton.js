import Phaser from 'phaser'

export default class SeePetsButton extends Phaser.Scene {
  constructor() {
    super({key: 'SeePetsButton'})
    this.loadPet = this.loadPet.bind(this)
  }

  create () {
    this.clickButton = this.add.text(925, 150, 'Visit Pets', { fill: '#FFC300', font: '18px' })
                               .setInteractive()
                               .on('pointerover', () => this.hoverState())
                               .on('pointerout', () => this.restState())
                               .on('pointerdown', () => this.loadPet())
  };

  // Functions for button interactivity
  hoverState() {
    this.clickButton.setStyle({ fill: '#FF5733' })
  }
  restState() {
    this.clickButton.setStyle({ fill: '#FFC300' })
  }
  loadPet () {
    this.scene.start('SeePet')
  }
}


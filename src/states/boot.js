'use strict';

export default class Boot extends Phaser.State {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.windowConstraints.bottom = 'visual';
    this.scale.parentIsWindow = true;

    this.game.load.image('loading-bg', 'media/images/loadingBarBG.png');
    this.game.load.image('loading-fg', 'media/images/loadingBarFG.png');
  }

  create() {
    this.game.state.start('preload');
  }
}

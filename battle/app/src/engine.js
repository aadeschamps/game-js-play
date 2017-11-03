import SceneManager from './scenes/manager';

export class Engine {

  constructor(opts) {
    this.ctx = ctx;
    this.renderer = opts.renderer;
    this.sceneManager = new SceneManager(); 
  }

  loadAssets() {}

  update() {}

  tick() {}

  defaultState() {}

  saveState() {}

}

class SceneManager {
  constructor(ctx) {
    this.scenes = {}
  }

  changeScene(sceneName) {
    this.currenctScene = sceneName;
  }

  addScene(name, scene) {
    this.scenes[name] = scene;
  }
};

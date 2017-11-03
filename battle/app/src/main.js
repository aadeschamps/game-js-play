const PIXI = require('pixi.js');
const renderer = PIXI.autoDetectRenderer(512, 512);

import { loadAllAssets } from './assetMaps/assetLoader';
import { Engine } from './engine';
import battle1 from './scenes/battle1';

document.body.appendChild(renderer.view);

function start() {
  gameLoop(battle1());
}

function gameLoop(stage) {
  renderer.render(stage);
  requestAnimationFrame(() => gameLoop(stage));
}

loadAllAssets(start);

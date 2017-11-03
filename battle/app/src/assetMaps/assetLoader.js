import { loader } from 'pixi.js';

import sprites from './sprites.json';

const loadSprites = function(cb) {
  loader
    .add(sprites)
    .load(cb);
};

export const loadAllAssets = function (cb) {
  loadSprites(cb);
}
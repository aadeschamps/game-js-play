import { loader, Sprite } from 'pixi.js';

class Base {
    constructor(resourceName) {
        this.sprite = new Sprite(
            PIXI.loader.resources[resourceName].texture
        );
    }
};

export default Base;

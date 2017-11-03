import { Container } from 'pixi.js';
import Warrior from '../../models/warrior';

class Battle1 {
  constructor(container) {
    this.container = container;
    this.gameObjects = [
      new Warrior({
        x: 50,
        y: offset * 1
      }),
      new Warrior({
        x: 50,
        y: offset * 2
      }),
      new Warrior({
        x: 50,
        y: offset * 3
      })
    ]
  }

  update() {

  }
}

const battle1 = () => {
  const stage = new Container();
  const offset = 512 / 5;
  const objs = [
    new Warrior({
      x: 50,
      y: offset * 1
    }),
    new Warrior({
      x: 50,
      y: offset * 2
    }),
    new Warrior({
      x: 50,
      y: offset * 3
    })
  ]

  objs.forEach((obj) => {
    stage.addChild(obj.sprite);
  });

  return stage;
}

export default battle1;
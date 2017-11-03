import Base from './base';

class Warrior extends Base {
    constructor(opts) {
        super('warrior');
        this.sprite.scale.set(0.15);
        this.sprite.x = opts.x;
        this.sprite.y = opts.y;
    }
};

export default Warrior;

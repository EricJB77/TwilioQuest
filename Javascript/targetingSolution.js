
class TargetingSolution {
    
    constructor(config) {
        this.x = config.x;
        this.y = config.y;
        this.z = config.z;
    }

    target() {
        return "(" + this.x.toString() + ", " + this.y.toString() + ", " + this.z.toString() + ")";
    }

}

const m = new TargetingSolution({
    x: 10,
    y: 15,
    z: 900
});

console.log(m.target());


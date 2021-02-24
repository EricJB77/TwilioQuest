
class Materializer {

    constructor(string1) {
        this.target = string1;
        this.activated = false;
    }

     activate() {
        this.activated = true;
    }

     materialize() {
        if (this.activated == true) {
            return this.target;
        }else return undefined;
    }

}

const m = new Materializer("Kevin");
console.log(m.activated);

m.activate();
console.log(m.activated);

console.log(m.materialize());

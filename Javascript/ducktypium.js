
class Ducktypium {

    constructor(crystalcolor) {
        this.color = crystalcolor;

        if (this.color != "red" && this.color != "blue" && this.color !="yellow") {
            throw new SyntaxError("The color can only be red, blue or yellow");
        }
    }

    calibrationSequence = [];

    refract(colorPassed) {
        if (colorPassed != "red" && colorPassed != "blue" && colorPassed != "yellow") {
            throw new Error("The color can only be red, blue or yellow");
        }

        if (colorPassed == this.color) {
            return this.color;
        }else if (colorPassed == "red" && this.color == "blue" || colorPassed == "blue" && this.color == "red") {
            return "purple";
        }else if (colorPassed == "red" && this.color == "yellow" || colorPassed == "yellow" && this.color == "red") {
            return "orange";
        }else if (colorPassed == "yellow" && this.color == "blue" || colorPassed == "blue" && this.color == "yellow") {
            return "green";
        }
    }

    calibrate(numArray) {
        let newArray = numArray.sort();
        newArray = newArray.map(item => item*3)
        this.calibrationSequence = newArray;
        console.log(this.calibrationSequence);
    }
}


const dt = new Ducktypium('red');

console.log(dt.color);  // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); //prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]

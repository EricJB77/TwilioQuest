

function scan(freightItems) {
    contarray = [];
    freightItems.forEach(myFunc);

    function myFunc (item, index, arr) {
        if (arr[index] == 'contraband') {
            contarray.push(index)
        }
    }
    return contarray;
}

const indexes = scan(['dog','contraband','cat','zippers','contraband']);
console.log("Contraband Indexes: " + indexes);



function scan(freightItems) {
    let contrabandCount = 0;
    freightItems.forEach(myFunc);
    
    function myFunc (item, index, arr) {
        if (arr[index] == 'contraband') {
            contrabandCount+=1;
        }
    }

    return contrabandCount;
}

const numItems = scan(['dog','contraband','cat','zippers','contraband']);
console.log('number of contraband: ' + numItems);



function calculatePower(freightItems) {
    let totalPower = 0;
    freightItems.forEach(myfunc)
        
    function myfunc(item, index, array) {
        totalPower += item * 2
    }
    
    return totalPower;
}

const laserPower = calculatePower([1,3,8]);
console.log("Required laser power is: " + laserPower);
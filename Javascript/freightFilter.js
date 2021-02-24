
function scanAndFilter(freightItems, forbiddenString) {
    let filteredItems = [];
    freightItems.filter(function(freightItem){
        if (freightItem != forbiddenString) {
            filteredItems.push(freightItem)
        }
    });

    return filteredItems;
}

const cargo = ['apples','ray guns','oranges','tacos','ray guns'];
const filteredCargo = scanAndFilter(cargo, 'ray guns');

console.log("Filtered Items: " + filteredCargo);

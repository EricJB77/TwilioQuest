
function getFirstAmountSorted(arguement1, arguement2) {
    
    var newArray = [];
    newArray = arguement1.sort();    
    return newArray.slice(0,arguement2);
}

const outputArray = getFirstAmountSorted(['bird', 'dog', 'cat', 'ant'], 2);


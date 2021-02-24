
const argumentValue1 = process.argv[2];
const argumentValue2 = process.argv[3];

if (argumentValue1.toUpperCase() == argumentValue2.toUpperCase()) {
    console.log("0");
}else if (argumentValue1 < argumentValue2) {
    console.log("-1");
}else if (argumentValue1 > argumentValue2) {
    console.log("1");
}

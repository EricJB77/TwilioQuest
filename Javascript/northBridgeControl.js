
const argumentValue = process.argv[2];

if (argumentValue === undefined) {
    console.log("No command line argument defined")
}else if (argumentValue.toUpperCase() === "EXTEND") {
    console.log("Extending bridge!")
}



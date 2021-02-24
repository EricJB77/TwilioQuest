function getLaserSetting(parameters) {
    if (parameters == "please") {
       return "OFF";
    } else {
        return "ON";

    }
}

console.log(getLaserSetting("OFF"));

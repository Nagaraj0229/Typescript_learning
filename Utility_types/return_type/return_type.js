function sendData(a, b) {
    return {
        a: "".concat(a),
        b: "".concat(b)
    };
}
function consoleData(data) {
    console.log(JSON.stringify(data));
}
var stringifyNumbers = sendData(1, 2);
consoleData(stringifyNumbers);

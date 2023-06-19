function sendData(a: number, b: number) {
    return {
        a: `${a}`,
        b: `${b}`
    }
}

type Data = {
    a: string,
    b: string
}

function consoleData(data:Data) {
    console.log(JSON.stringify(data));
}

let stringifyNumbers = sendData(1, 2);
consoleData(stringifyNumbers);

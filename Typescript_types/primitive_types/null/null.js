function doSomething(x) {
    if (x === null) {
        console.log("hello!");
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
console.log(doSomething(null));

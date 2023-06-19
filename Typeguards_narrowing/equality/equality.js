function example(x, y) {
    console.log(typeof x);
    console.log(typeof y);
    console.log("a" === "a");
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
var x = "nagaraj";
var y = "nagaraj";
example(x, y);

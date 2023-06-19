var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("flying...");
    };
    Bird.prototype.layEggs = function () {
        console.log("laying eggs...");
    };
    return Bird;
}());
var tree = /** @class */ (function () {
    function tree() {
    }
    tree.prototype.walk = function () {
        console.log("step down to stairs..");
    };
    return tree;
}());
var pet = new Bird();
console.log(pet instanceof tree);
console.log(pet instanceof Bird);
if (pet instanceof Bird) {
    console.log("the bird is blowing...");
}
else {
    console.log("its not a bird type ...");
}

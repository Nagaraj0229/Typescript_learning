var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 10; }
        if (y === void 0) { y = 20; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.mainFunction = function () {
        console.log("".concat(this.x, " and ").concat(this.y, " is making a sound"));
    };
    return Point;
}());
var pointMethod = new Point(10, 30);
console.log(pointMethod);

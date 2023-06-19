var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.name = function () {
        console.log("my x value is ".concat(this.x, " and y value is ").concat(this.y));
    };
    return Point;
}());
var user = new Point(0, 0);
console.log(user.name());

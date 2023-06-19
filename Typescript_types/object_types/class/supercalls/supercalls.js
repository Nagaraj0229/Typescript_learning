var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base(brand) {
        this.k = brand;
    }
    Base.prototype.present = function () {
        return 'I have a value of k is ' + this.k;
    };
    return Base;
}());
var model = /** @class */ (function (_super) {
    __extends(model, _super);
    function model(brand, mod) {
        var _this = _super.call(this, brand) || this;
        _this.k = mod;
        return _this;
    }
    model.prototype.show = function () {
        return this.present() + ', it is a ' + this.k;
    };
    return model;
}(Base));
var myCar = new model("", "5");
console.log(myCar.show());

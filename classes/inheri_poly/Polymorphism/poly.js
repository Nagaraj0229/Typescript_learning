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
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.greet = function () {
        console.log("hey there!");
    };
    return person;
}());
var programmer = /** @class */ (function (_super) {
    __extends(programmer, _super);
    function programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    programmer.prototype.greet = function () {
        console.log("hello world!");
    };
    programmer.prototype.addgreeetings = function () {
        this.greet();
    };
    return programmer;
}(person));
var aprogrammer = new programmer();
aprogrammer.greet();

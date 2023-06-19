var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.drive = function () {
        console.log("Driving my ".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    };
    return Car;
}());
var myCar = new Car("by japanese", "bmw v5", "2023");
myCar.drive();

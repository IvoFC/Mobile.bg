function Car(brand, model, price, engine) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.engine = engine;

    this.images = [];
    this.extras = [];
}

var carManager = (function () {

    var cars = [new Car('BMW', 'E36', 1500, 'gas')];

    return {
        addCar: function (car) {
            if (car instanceof Car) {
                cars.push(car);
            }
        }
    }
})();
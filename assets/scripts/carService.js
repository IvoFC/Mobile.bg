function Car(brand, model, price, engine, extras) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.engine = engine;
    this.extras = extras;
    this.images = [];

}

var carManager = (function () {

    var cars = [new Car('BMW', 'E36', 1500, 'gas')];

    return {
        models: cars,

        addCar: function (car) {
            if (car instanceof Car) {
                cars.push(car);
            }
        }
    }
})();
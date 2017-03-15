function Car(brand, model, region, gearBox, euroStand, horsePower, category, mileage, color, price, month, year, engine, extras, image) {
    this.brand = brand;
    this.model = model;
    this.region = region;
    this.category = category;
    this.color = color;
    this.price = price;
    this.dateOfMade = month + ' ' + year;
    this.engine = engine;
    this.horsePower = horsePower;
    this.gearBox = gearBox;
    this.euroStandard = euroStand;
    this.mileage = mileage;
    this.extras = extras;
    this.image = image;
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
function Car(brand, model, region, gearBox, euroStand, horsePower, category, mileage, color, price, month, year, engine, extras, image, owner) {
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
    this.owner = owner;
}

var carManager = (function () {

    var cars = [new Car('BMW', 'E36', 'Варна', 'Ръчна', 'Евро 1', '102', 'Кабрио', '100000', 'Син', '4500', 'декември', '2005', 'Бензинов', ['ABS', 'ESP']),
                new Car('Honda', 'Accord', 'София', '', '', '102', 'Кабрио', '100000', 'Син', '4500', 'декември', '2005', 'Бензинов'),
                new Car('Honda', 'Accord', 'София', '', '', '102', 'Кабрио', '100000', 'Син', '4500', 'декември', '2005', 'Бензинов', "", "", "asd")];

    return {
        models: cars,

        addCar: function (car) {
            if (car instanceof Car) {
                cars.push(car);
            }
        },

        // Put all cars of current user into array
        getAllCarsOfCurrentUser: function(user){
            var carsofUser = [];
            for(var index = 0; index < cars.length; index++) {
                if(cars[index].owner === user) {
                    carsofUser.push(cars[index]);
                }
            }
            return carsofUser;
        }
    }
})();
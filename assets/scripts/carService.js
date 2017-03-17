function Car(brand, model, region, gearBox, euroStand, horsePower, category, mileage, color, price, month, year, engine, extras, image) {
    this.brand = brand;
    this.model = model;
    this.region = region;
    this.category = category;
    this.color = color;
    this.price = price;
    this.year = year;
    this.month = month;
    this.engine = engine;
    this.horsePower = horsePower;
    this.gearBox = gearBox;
    this.euroStandard = euroStand;
    this.mileage = mileage;
    this.extras = extras;
    this.image = image;
}

var carManager = (function () {

    var cars = [new Car('Bmw', '320', 'Варна', 'Ръчна', 'Евро 1', '102', 'Кабрио', '100000', 'Син', '4500', 'декември', '2005', 'Бензинов', ['ABS', 'ESP']),
        new Car('Honda', 'Accord', 'София', '', '', '102', 'Кабрио', '100000', 'Син', '4500', 'декември', '2005', 'Бензинов')];

    getCars(cars);

    return {
        models: cars,

        addCar: function (car) {
            if (car instanceof Car) {
                cars.push(car);
            }
        },

        searchCars: function (yearFrom, yearTo, priceStart, priceEnd, horsePowStart, horsePowEnd, maxMile, brand, model, region, gearBox, category, color, engine, extras) {
            var carsSearch = [];

            var searchModel = {
                brand: brand,
                model: model,
                region: region,
                gearBox: gearBox,
                category: category,
                color: color,
                engine: engine,
                extras: extras
            };

            for (var spec in searchModel) {
                if (searchModel[spec] == '') {
                    delete searchModel[spec];
                }
            }

            function compareObjects() {
                var flag = true;

                for (var item in searchModel) {
                    if (searchModel[item] != cars[index][item]) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    carsSearch.push(cars[index]);
                }
            }

            function isUndefined(param) {
                return param != '';
            }

            for (var index = 0; index < cars.length; index++) {

                if (isUndefined(yearFrom) && Number(cars[index].year) >= Number(yearFrom) &&
                    isUndefined(yearTo) && Number(cars[index].year) <= Number(yearTo) &&
                    isUndefined(priceStart) && Number(cars[index].price) >= Number(priceStart) &&
                    isUndefined(priceEnd) && Number(cars[index].price) <= Number(priceEnd) &&
                    isUndefined(horsePowStart) && Number(cars[index].horsePower) >= Number(horsePowStart) &&
                    isUndefined(horsePowEnd) && Number(cars[index].horsePower) <= Number(horsePowEnd) &&
                    isUndefined(maxMile) && Number(cars[index].mileage) <= Number(maxMile)) {

                    compareObjects();

                } else if (isUndefined(yearTo) && yearTo >= cars[index].year &&
                    isUndefined(priceEnd) && yearTo >= cars[index].price &&
                    isUndefined(horsePowEnd)) {
                }
            }
            return carsSearch;
        }
    }
})();
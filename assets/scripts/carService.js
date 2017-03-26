function Car(image, brand, model, region, gearBox, euroStand, horsePower, category, mileage, color, price, month, year, engine, extras, owner) {
    this.image = image;
    this.brand = brand;
    this.model = model;
    this.region = region;
    this.category = category;
    this.color = color;
    this.price = price;
    this.month = month;
    this.year = year;
    this.engine = engine;
    this.horsePower = horsePower;
    this.gearBox = gearBox;
    this.euroStandard = euroStand;
    this.mileage = mileage;
    this.extras = extras;

    this.owner = owner;
}

var carManager = (function () {
    var carsFromStorage = JSON.parse(window.localStorage.getItem('cars'));
    var cars = [];
    if (Array.isArray(carsFromStorage)) {
        cars = carsFromStorage;
    }
    return {
        models: cars,

        addCar: function (car) {
            if (car instanceof Car) {
                var flag = true;
                for (var index = 0; index < cars.length; index++) {
                    if (car.brand == cars[index].brand && car.model == cars[index].model &&
                        car.region == cars[index].region && car.category == cars[index].category &&
                        car.color == cars[index].color && car.price == cars[index].price &&
                        car.year == cars[index].year && car.month == cars[index].month &&
                        car.engine == cars[index].engine && car.horsePower == cars[index].horsePower &&
                        car.gearBox == cars[index].gearBox && car.mileage == cars[index].mileage &&
                        car.euroStandard == cars[index].euroStandard && car.owner == cars[index].owner) {
                        flag = false;
                    }
                }
                if (flag) {
                    cars.push(car);
                    window.localStorage.setItem('cars', JSON.stringify(cars));
                }
            }
        },

        // Put all cars of current user into array
        getAllCarsOfCurrentUser: function (user) {
            var carsofUser = [];
            for (var index = 0; index < cars.length; index++) {
                if (cars[index].owner === user) {
                    carsofUser.push(cars[index]);
                }
            }
            return carsofUser;
        },

        deleteCar: function (car) {
            for (var index = 0; index < cars.length; index++) {
                if (JSON.stringify(car) === JSON.stringify(cars[index])) {
                    cars.splice(index, 1);
                    break;
                }
            }
            window.localStorage.setItem('cars', JSON.stringify(cars));
            // JSON.stringify(obj1) === JSON.stringify(obj2) 
        },

        getCarsForSlideShow: function () {

            var carsToShow = [];
            for (var index = 0; index < 5; index++) {
                carsToShow.push(cars[Math.floor(Math.random() * cars.length)]);
            }
            return carsToShow;
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

            for (var index = 0; index < cars.length; index++) {

                if (Number(cars[index].year) >= (Number(yearFrom) || 0) &&
                    Number(cars[index].year) <= (Number(yearTo) || 2017) &&
                    Number(cars[index].price) >= (Number(priceStart) || 0) &&
                    Number(cars[index].price) <= (Number(priceEnd) || 99999) &&
                    Number(cars[index].horsePower) >= (Number(horsePowStart) || 0) &&
                    Number(cars[index].horsePower) <= (Number(horsePowEnd) || 999) &&
                    Number(cars[index].mileage) <= (Number(maxMile) || 9999999)) {

                    var flag = true;
                    var flagExtras = true;

                    for (var item in searchModel) {
                        if (searchModel[item] !== searchModel["extras"]) {
                            if (searchModel[item] != cars[index][item]) {
                                flag = false;
                                break;
                            }
                        }
                    }
                    for (var extra = 0; extra < extras.length; extra++) {
                        if (cars[index].extras == undefined || cars[index].extras.length < 1) {
                            flagExtras = false;
                            break;
                        } else {
                            if (cars[index].extras.indexOf(extras[extra]) < 0) {
                                flagExtras = false;
                                break;
                            }
                        }
                    }
                    if (flag && flagExtras) {
                        carsSearch.push(cars[index]);
                    }
                }
            }
            return carsSearch;
        }
    }
})();
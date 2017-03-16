function getCars(cars, whereToShow) {
    for (var index = 0; index < cars.length; index++) {

        var divCar = document.createElement('div');
        divCar.id = "divCar";
        // var viewCars = document.getElementById('viewCars');
        whereToShow.appendChild(divCar);

        for (var prop in cars[index]) {
            if (Object.prototype.hasOwnProperty.call(cars[index], prop)) {
                var value = cars[index][prop];

                var name = '';
                if (prop == 'image' && value != undefined && value != '') {
                    name = 'Снимка';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'brand' && value != undefined && value != '') {
                    name = 'Марка';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'model' && value != undefined && value != '') {
                    name = 'Модел';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'region' && value != undefined && value != '') {
                    name = 'Регион';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'gearBox' && value != undefined && value != '') {
                    name = 'Скоростна кутия';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'euroStandard' && value != undefined && value != '') {
                    name = 'Евро стандарт';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'horsePower' && value != undefined && value != '') {
                    name = 'Мощност [к.с.]';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'category' && value != undefined && value != '') {
                    name = 'Категория';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'mileage' && value != undefined && value != '') {
                    name = 'Пробег';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'color' && value != undefined && value != '') {
                    name = 'Цвят';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'price' && value != undefined && value != '') {
                    name = 'Цена';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'dateOfMade' && value != undefined && value != '') {
                    name = 'Дата на производство';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'engine' && value != undefined && value != '') {
                    name = 'Двигател';
                    divCar.innerHTML += name + ': ' + value + '<br/>';
                }
                if (prop == 'extras' && cars[index].extras != undefined && cars[index].extras.length > 0) {
                    name = 'Екстри';
                    divCar.innerHTML += name + ': ';
                    for (var extra = 0; extra < cars[index].extras.length; extra++) {
                        divCar.innerHTML += cars[index].extras[extra] + ', ';
                    }
                };
            }
        }
    }
}
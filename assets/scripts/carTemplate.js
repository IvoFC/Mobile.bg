function getCars(cars, whereToShow, canBeDeleted, unclickable) {
    // var title = document.createElement('h2');
    // title.style.fontWeight = 'bold';
    // title.style.borderBottom = "3px solid #09F";
    // title.style.paddingBottom = "10px";
    // title.style.marginBottom = "5px";
    // title.innerHTML += "Резултати от търсенето: "
    // whereToShow.appendChild(title);


    for (let index = 0; index < cars.length; index++) {

        var divCar = document.createElement('div');
        divCar.className = "divCar";
        divCar.id = 'divCar' + index;
        var divCarText1 = document.createElement('div');
        divCarText1.className = "divCarText";
        var divCarText2 = document.createElement('div');
        divCarText2.className = "divCarText";

            if(canBeDeleted) {
                var deleteIcon = document.createElement("i");
                deleteIcon.className = "fa fa-trash-o fa-3x delete-icon";
                deleteIcon.addEventListener("click", function() {
                    // console.log("Iztrivam ei taq obqva...");
                    // console.log(cars[index]);

                    
                    carManager.deleteCar(cars[index]);
                    // divCar.parentElement.removeChild(document.getElementById("divCar" + index));
                    // deleteButton.parentElement.parentElement.removeChild(document.getElementById("divCar" + index));
                    document.getElementById("divCar" + index).style.display = "none";
                }, false)
                divCar.appendChild(deleteIcon);
            }

        whereToShow.appendChild(divCar);
        divCar.appendChild(divCarText2);
        divCar.appendChild(divCarText1);


        for (var prop in cars[index]) {
            if (Object.prototype.hasOwnProperty.call(cars[index], prop)) {
                var value = cars[index][prop];
                var name = '';

                if (prop == 'image' && value != undefined && value != '') {
                    name = 'Снимка';
                    var imageDiv = document.createElement('div');
                    divCar.appendChild(imageDiv);
                    imageDiv.className = "imageDiv";
                    var carImage = document.createElement('img');
                    carImage.className = "listed-cars";
                    carImage.src = value;
                    if (!unclickable) {
                        carImage.addEventListener('click', function () {
                            var divBackground = document.createElement('div');
                            divBackground.id = 'previewBackground';
                            divBackground.style.display = 'block';
                            var divPopUp = document.createElement('div');
                            divPopUp.id = 'previewPopUp';
                            divPopUp.style.display = 'block';
                            divPopUp.style.position = 'fixed';
                            divBackground.addEventListener('click', function () {
                                divBackground.style.display = 'none';
                                divPopUp.innerHTML = '';
                            }, false);
                            whereToShow.appendChild(divBackground);
                            whereToShow.appendChild(divPopUp);
                            getCars([cars[index]], divPopUp, false, true);
                        }, false);
                    }
                    imageDiv.appendChild(carImage);
                }
                
                if (prop == 'brand' && value != undefined && value != '') {
                    name = 'Марка';
                    divCarText1.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'model' && value != undefined && value != '') {
                    name = 'Модел';
                    divCarText1.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'region' && value != undefined && value != '') {
                    name = 'Регион';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'gearBox' && value != undefined && value != '') {
                    name = 'Скоростна кутия';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'euroStandard' && value != undefined && value != '') {
                    name = 'Евро стандарт';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'horsePower' && value != undefined && value != '') {
                    name = 'Мощност [к.с.]';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'category' && value != undefined && value != '') {
                    name = 'Категория';
                    divCarText1.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'mileage' && value != undefined && value != '') {
                    name = 'Пробег';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'color' && value != undefined && value != '') {
                    name = 'Цвят';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'price' && value != undefined && value != '') {
                    name = 'Цена';
                    divCarText1.innerHTML += '<p><span>' + name + ': </span>' + value + ' лв. <br/></p>';
                }

                if (prop == 'year' && value != undefined && value != '') {
                    name = 'Година на производство';
                    divCarText1.innerHTML += '<p><span>' + name + ': </span>' + value + '</p>';
                }

                if (prop == 'engine' && value != undefined && value != '') {
                    name = 'Двигател';
                    divCarText2.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'extras' && cars[index].extras != undefined && cars[index].extras.length > 0) {
                    name = '<br/> Екстри';
                    var divExtras = document.createElement('div');
                    divCar.appendChild(divExtras);
                    divExtras.className = "divExtras";
                    divExtras.innerHTML += '<span>' + name + ': </span>';
                    for (var extra = 0; extra < cars[index].extras.length; extra++) {
                        divExtras.innerHTML += cars[index].extras[extra] + ', ';
                    }
                }
            }
        }
    }
}
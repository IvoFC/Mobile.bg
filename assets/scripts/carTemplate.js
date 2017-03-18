function getCars(cars, whereToShow) {
    var title = document.createElement('h2');
    title.style.fontWeight = 'bold';
    title.style.borderBottom = "3px solid #09F";
    title.style.paddingBottom = "10px";
    title.style.marginBottom = "5px";
    title.innerHTML += "Резултати от търсенето: "
    whereToShow.appendChild(title);

    

    for (var index = 0; index < cars.length; index++) {

        var divCar = document.createElement('div');
        divCar.className = "divCar";

        var divCarText = document.createElement('div');
        divCarText.className = "divCarText";


        // var viewCars = document.getElementById('viewCars');
        whereToShow.appendChild(divCar);
        divCar.appendChild(divCarText);


        for (var prop in cars[index]) {
            if (Object.prototype.hasOwnProperty.call(cars[index], prop)) {
                var value = cars[index][prop];
                var name = '';

                if (prop == 'image' && value != undefined && value != '') {
                    name = 'Снимка';

                    var carImage = document.createElement('img');
                    carImage.src = value;
                    divCar.appendChild(carImage);
                }
                if (prop == 'brand' && value != undefined && value != '') {
                    name = 'Марка';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'model' && value != undefined && value != '') {
                    name = 'Модел';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'region' && value != undefined && value != '') {
                    name = 'Регион';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'gearBox' && value != undefined && value != '') {
                    name = 'Скоростна кутия';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'euroStandard' && value != undefined && value != '') {
                    name = 'Евро стандарт';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'horsePower' && value != undefined && value != '') {
                    name = 'Мощност [к.с.]';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'category' && value != undefined && value != '') {
                    name = 'Категория';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'mileage' && value != undefined && value != '') {
                    name = 'Пробег';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'color' && value != undefined && value != '') {
                    name = 'Цвят';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'price' && value != undefined && value != '') {
                    name = 'Цена';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }

                if (prop == 'month' && value != undefined && value != '') {
                    name = 'Дата на производство';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '</p>';
                }

                if (prop == 'year' && value != undefined && value != '') {
                    name = '';
                    divCarText.innerHTML += '<p>' + ' ' + value + '<br/></p>';
                }

                if (prop == 'engine' && value != undefined && value != '') {
                    name = 'Двигател';
                    divCarText.innerHTML += '<p><span>' + name + ': </span>' + value + '<br/></p>';
                }
                if (prop == 'extras' && cars[index].extras != undefined && cars[index].extras.length > 0) {
                    name = '<br/> Екстри';
                    divCar.innerHTML += '<p><span>' + name + ': <span>' + '</p><p>';
                    for (var extra = 0; extra < cars[index].extras.length; extra++) {
                        divCar.innerHTML += cars[index].extras[extra] + ', ';
                    }
                    divCar.innerHTML += "<br/></p>";
                }
            }
        }
        // var viewButton = document.createElement('button');
        // viewButton.id = 'viewButton';
        // divCar.appendChild(viewButton);
        // viewButton.innerHTML = "Разгледай обявата";

        // console.log(cars[index]);
        // if (withButtons) {
        //     //view Button Functionality
        //     var publishButton = document.querySelector(".publish");
        //     var searchButton = document.querySelector(".searching");
        //     if (searchButton = null) {
        //         searchButton = document.querySelector(".active");
        //     }
        //     var homePageSearchButton = document.getElementById("homepage-search-button");
        //     var advancedSearchButton = document.getElementById("searchButton");
        //     var homeButton = document.querySelector('.homeBut');
        //     var myMobileButton = document.querySelector('#navMyMobile > a');
        //     var viewPublicationButton = document.getElementById('viewPublicationButton');
        //     var backToPublish = document.getElementById('backToPublishText');
        //     // Get all pages
        //     var mainDIv = document.querySelector('#homePage');
        //     var publishPage = document.querySelector('#publishCars');
        //     var searchingPage = document.querySelector('#searching');
        //     var searchFromHome = document.querySelector('#viewCarsFromHomeSearch');
        //     var advancedSearch = document.querySelector('#viewCarsAdvanced');
        //     var viewPage = document.querySelector('#view');
        //     var publishPreview = document.querySelector('#viewPublication');
        //     var previewSelections = document.querySelector('#previewSelections');
        //     var myMobilePage = document.querySelector('#my-mobile');

        //     var viewButton = document.createElement('button');
        //     viewButton.id = 'viewButton';
        //     divCar.appendChild(viewButton);
        //     viewButton.innerHTML = "Разгледай обявата";
        //     viewButton.addEventListener('click', function (event) {

        //         searchingPage.style.display = 'none';
        //         publishPage.style.display = 'none';
        //         mainDIv.style.display = 'none';
        //         publishPreview.style.display = 'none';
        //         myMobilePage.style.display = 'none';
        //         searchFromHome.style.display = 'none';
        //         advancedSearch.style.display = "none";
        //         viewPage.style.display = "block";

        //         // viewPage.innerHTML += viewButton.parentNode.innerHTML;
        //         console.log("Kolata ti e ei taiq: ");
        //         console.log(models[index]);
        //         getCars([cars[index]], viewPage, false);

        //         event.preventDefault();
        //     }, false);

        // }
    }
}

(function () {

//    for slide show:

    var sName = document.querySelector('#model3');
    var sPrice = document.querySelector('#price3');
    var sCarKM = document.querySelector('#km3');
    var sTown = document.querySelector('#town3');
    var sDate = document.querySelector('date');

//    for cars:
    var models = document.getElementsByClassName('carName');
    var price = document.getElementsByClassName('carPrice');
    var km = document.getElementsByClassName('carKM');
    var town = document.getElementsByClassName('carCity');
    var imgs = document.getElementsByClassName('imgS');
    var anchors = document.getElementsByClassName("linkA");

    var carsToShow = carManager.getCarsForSlideShow();
    var images = ['assets/img/fpvip_r.gif', 'assets/img/fpvip_g.gif']

    for (var index = 0; index < carsToShow.length; index++) {
        models[index].innerHTML = carsToShow[index].brand + ' ' + carsToShow[index].model;
        price[index].innerHTML = carsToShow[index].price + ' лв,';
        km[index].innerHTML = carsToShow[index].mileage + ' км, ';
        town[index].innerHTML = carsToShow[index].region;
        imgs[index].src = images[Math.floor(Math.random() * images.length)];
    }

    function changeText(index) {
        sName.innerHTML = models[index].innerText;
        sPrice.innerHTML = price[index].innerText;
        sCarKM.innerHTML = km[index].innerText;
        sTown.innerHTML = town[index].innerText;
    }

    for (let link = 0; link < anchors.length; link++) {

        anchors[link].addEventListener('mouseover', function () {
            changeText(link);
        }, false)
    }

})();
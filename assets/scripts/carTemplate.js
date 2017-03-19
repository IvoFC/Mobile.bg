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

        var divCarText1 = document.createElement('div');
        divCarText1.className = "divCarText";
        var divCarText2 = document.createElement('div');
        divCarText2.className = "divCarText";


        // var viewCars = document.getElementById('viewCars');
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
                    carImage.src = value;
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
                    divCar.innerHTML += "<br/>";
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
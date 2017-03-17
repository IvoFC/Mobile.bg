(function () {
    function getById(id) {
        return document.getElementById(id);
    }

    var imagefile;
    var input = document.querySelector('#upload-image > input');
    input.addEventListener('change', function () {
        console.log('Input was changed');
        var previewImage = document.querySelector('#upload-image > img');
        var reader = new FileReader();

        reader.addEventListener('load', function () {
            console.log('Picture was loaded');
            previewImage.src = reader.result;
            imagefile = input.files[0];
        }, false);

        if (input) {
            reader.readAsDataURL(input.files[0]);
            console.log(input.files[0]);
        }
    }, false);

    // SHOWING PICTURE ---> First create new filereader,
    // then readAsDataURL, and when reader loads set our
    // image src to be equal to reader.result.

    // var btn = getById('Second-button');
    // btn.addEventListener('click', function (event) {
    //     console.log('Second image');
    //     var showImage = document.createElement('img');
    //     var reader = new FileReader();

    //      reader.addEventListener('load', function () {
    //         showImage.src = reader.result;
    //     }, false);

    //     reader.readAsDataURL(imagefile);
    //     document.body.appendChild(showImage);
    // }, false)


    var pubButton = getById('publishButton');

    pubButton.addEventListener('click', function (event) {
        var brand = getById('brand');
        brand = brand.options[brand.selectedIndex].value;

        var model = getById('model1');
        model = model.options[model.selectedIndex].value;

        var region = getById('region1');
        region = region.options[region.selectedIndex].value;

        var color = getById('color');
        color = color.options[color.selectedIndex].value;

        var month = getById('productionDate1');
        month = month.options[month.selectedIndex].value;

        var year = getById('productionDate2');
        year = year.options[year.selectedIndex].value;

        var price = getById('price2');
        price = price.value;

        var category = getById('category1');
        category = category.options[category.selectedIndex].value;

        var engine = getById('engineType1');
        engine = engine.options[engine.selectedIndex].value;

        var euroStandard = getById('euroStandard');
        euroStandard = euroStandard.options[euroStandard.selectedIndex].value;

        var gearBox = getById('gearBox');
        gearBox = gearBox.options[gearBox.selectedIndex].value;

        var mileage = getById('mileage');
        mileage = mileage.value;

        var horsePower = getById('horsePower');
        horsePower = horsePower.value;

        var extras = [];
        var collectionCheckBox = document.querySelectorAll('.checkBoxes  input:checked');
        for (var index = 0; index < collectionCheckBox.length; index++) {
            extras.push(collectionCheckBox[index].value);
        }

        carManager.addCar(new Car(brand, model, region, gearBox, euroStandard, horsePower, category, mileage, color, price, month, year, engine, extras));

        event.preventDefault();
    }, false);

    // Searching cars

    var searchButton = getById('searchButton');

    searchButton.addEventListener('click', function (event) {
        var brand = getById('brandS');
        brand = brand.value;

        var model = getById('modelS');
        model = model.value;

        var yearFrom = getById('yearFrom');
        yearFrom = yearFrom.value;

        var yearTo = getById('yearTo');
        yearTo = yearTo.value;

        var priceStart = getById('priceFrom');
        priceStart = priceStart.value;

        var priceEnd = getById('priceTo');
        priceEnd = priceEnd.value;

        var horsePowStart = getById('horsePowerFrom');
        horsePowStart = horsePowStart.value;

        var horsePowEnd = getById('horsePowerTo');
        horsePowEnd = horsePowEnd.value;

        var engine = getById('engineTypeS');
        engine = engine.value;

        var gearBox = getById('transmissionBox');
        gearBox = gearBox.value;

        var maxMile = getById('maxMileage');
        maxMile = maxMile.value;

        var color = getById('colorS');
        color = color.value;

        var region = getById('regionS');
        region = region.value;

        var category = getById('categoryS');
        category = category.value;

        var extras = [];
        var collectionCheckBox = document.querySelectorAll('#searching .checkBoxes  input:checked');
        for (var index = 0; index < collectionCheckBox.length; index++) {
            extras.push(collectionCheckBox[index].value);
        }

        var car = carManager.searchCars(yearFrom, yearTo, priceStart, priceEnd, horsePowStart, horsePowEnd, maxMile, brand, model, region, gearBox, category, color, engine, extras);

        console.log(car);
        event.preventDefault();

    }, false)

var homePageSearchButton = document.getElementById("homepage-search-button");
homePageSearchButton.addEventListener('click', function(event) {
    getCars(carManager.models, document.body);
    event.preventDefault();
}, false);



})();
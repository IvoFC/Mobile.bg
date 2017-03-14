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

        var model = getById('model');
        model = model.options[model.selectedIndex].value;

        var price = getById('price');
        price = price.value;

        var engine = getById('engineType');
        engine = engine.options[engine.selectedIndex].value;

        var extras = [];
        var collectionCheckBox = document.querySelectorAll('.checkBoxes  input:checked');
        for (var index = 0; index < collectionCheckBox.length; index++) {
            extras.push(collectionCheckBox[index].value);
        }

        carManager.addCar(new Car(brand, model, price, engine, extras, imagefile));

        event.preventDefault();
    }, false);



})();